<script setup>
import { onMounted, ref } from 'vue';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  Space,
  Button,
  Table,
  Popconfirm,
  message,
  Drawer,
  Form,
  FormItem,
  Input,
  InputNumber,
  Select,
  Radio,
  RadioGroup,
  Upload,
  Tooltip,
} from 'ant-design-vue';

import {
  knowledgeList,
  knowledgeDelete,
  knowledgeSave,
  knowledgeDetail,
  knowledgeFileDelete,
  knowledgeFileDeleteByKnowledge,
  knowledgeFragmentList,
} from '#/api/operator/knowledgeBase';

import { externalKnowledgeApiList } from '#/api/operator/externalKnowledgeApi';

import { useAppConfig } from '@vben/hooks';
import { useAccessStore } from '@vben/stores';

const { apiURL, clientId } = useAppConfig(
  import.meta.env,
  import.meta.env.PROD,
);
const accessStore = useAccessStore();
const uploadUrl = `${apiURL}/knowledge/attach/upload`;
// 使用upload组件只能这样上传
let kid = ref('');
const headers = {
  Authorization: `Bearer ${accessStore.accessToken}`,
  clientId,
};

const uploading = ref(false);
function handleChange(info) {
  const file = info.file;
  const status = file?.status;
  // const url = file?.response?.data.url;
  const name = file?.name;

  switch (status) {
    case 'uploading': {
      if (!uploading.value) {
        uploading.value = true;
      }

      break;
    }
    case 'done': {
      // http 200会走到这里  需要再次判断
      const { response } = file;
      const { code, data, msg = '服务器错误' } = response;
      if (code === 200) {
        const { url } = data;
        getDetail(kid.value);
      } else {
        message.error(msg);
      }
      uploading.value = false;

      break;
    }
    case 'error': {
      uploading.value = false;

      break;
    }
  }
}

const data = ref([]);
const drawerVisible = ref(false);
const defaultFormData = {
  share: 0,
  kname: '',
  provider: 'LOCAL',
  knowledgeSeparator: '',
  retrieveLimit: 5,
  textBlockSize: 300,
  overlapChar: 30,
  vectorModelName: 'weaviate',
  questionSeparator: '',
  embeddingModelName: 'baai/bge-m3',
  description: '',
  externalKnowledgeApiId: undefined,
  externalKnowledgeId: '',
};
const formData = ref({ ...defaultFormData });
const providerOptions = ref([
  { label: '本地知识库', value: 'LOCAL' },
  { label: '外部知识库', value: 'EXTERNAL' },
]);
// 根据 provider 值返回展示标签，空值时回退为本地知识库
const getProviderLabel = (value) => {
  const opt = providerOptions.value.find((o) => o.value === value);
  return opt ? opt.label : '本地知识库';
};
const getVector = ref([
  { label: 'weaviate', value: 'weaviate' },
  { label: 'milvus', value: 'milvus' },
]);

const getVectorModel = ref([
  { label: 'text-embedding-3-small', value: 'text-embedding-3-small' },
  { label: 'quentinz/bge-large-zh-v1.5', value: 'quentinz/bge-large-zh-v1.5' },
  { label: 'baai/bge-m3', value: 'baai/bge-m3' },
]);

// 外部知识库API选项列表
const externalApiOptions = ref([]);

onMounted(() => {
  getList();
  getExternalApiList();
});

// 获取外部知识库API列表
const getExternalApiList = () => {
  externalKnowledgeApiList().then((res) => {
    externalApiOptions.value = res.rows.map(item => ({
      label: item.name,
      value: item.id,
    }));
  }).catch(err => {
    console.error('获取外部知识库API列表失败:', err);
  });
};

const getList = () => {
  knowledgeList().then((res) => {
    data.value = res.rows;
  });
};

const headerStyle = {
  textAlign: 'right',
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#fff',
};

const contentStyle = {
  backgroundColor: '#fff',
  flex: '1',
  overflow: 'auto', // 内容过多时可滚动
};

const columns = [
  { title: '编号', dataIndex: 'kid', key: 'kid' },
  { title: '知识名称', dataIndex: 'kname', key: 'kname' },
  { title: '知识描述', dataIndex: 'description', key: 'description' },
  { title: '知识库类型', dataIndex: 'provider', key: 'provider' },
  { title: '操作', key: 'action' },
];

// 新增
const handleAdd = () => {
  formData.value = { ...defaultFormData };
  drawerVisible.value = true;
};

// 删除
const handleDelete = (record) => {
  knowledgeDelete(record.id).then((res) => {
    message.success('删除成功');
    getList();
  });
};

// 附件
const fileVisible = ref(false);
const fileData = ref([]);
const handleAttachment = (record) => {
  getDetail(record.id);
  fileVisible.value = true;
  kid.value = record.id;
};
const getDetail = (id) => {
  knowledgeDetail(id).then((res) => {
    fileData.value = res.rows;
  });
};
// 附件表格
const fileColumns = [
  { title: '文档编号', dataIndex: 'docId', key: 'docId' },
  { title: '文档名称', dataIndex: 'docName', key: 'docName' },
  { title: '文档类型', dataIndex: 'docType', key: 'docType' },
  { title: '操作', key: 'action' },
];

// 附件删除
const handleDeleteFile = (record) => {
  knowledgeFileDeleteByKnowledge(kid.value, record.docId).then((res) => {
    message.success('删除成功');
    getDetail(kid.value);
  });
};

// 知识片段
const fileFragmentVisible = ref(false);
const fileFragmentColumns = [
  { title: '片段编号', dataIndex: 'fid', key: 'fid' },
  { title: '片段内容', dataIndex: 'content', key: 'content' },
];
const fileFragmentData = ref([]);
const handleFragment = (record) => {
  knowledgeFragmentList(record.docId).then((res) => {
    fileFragmentData.value = res.rows;
  });
  fileFragmentVisible.value = true;
};

// 添加表单引用
const formRef = ref();

// 修改提交处理函数
const handleSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      knowledgeSave(formData.value).then((res) => {
        message.success('添加成功');
        getList();
        drawerVisible.value = false;
      });
    })
    .catch((error) => {
      console.log('表单校验失败:', error);
    });
};
</script>

<template>
  <div>
    <Space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
      <Layout style="height: 100%">
        <LayoutHeader :style="headerStyle">
          <Button type="primary" @click="handleAdd">新增</Button>
        </LayoutHeader>
        <LayoutContent :style="contentStyle">
          <Table :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
              <span v-if="column.key === 'provider'">
                {{ getProviderLabel(record.provider) }}
              </span>
              <span v-else-if="column.key === 'action'">
                <Popconfirm
                  title="确定删除吗？"
                  ok-text="是"
                  cancel-text="否"
                  @confirm="handleDelete(record)"
                >
                  <Button type="primary" danger style="margin-right: 10px">
                    删除
                  </Button>
                </Popconfirm>

                <Button type="primary" @click="handleAttachment(record)"
                  >附件</Button
                >
              </span>
            </template>
          </Table>
        </LayoutContent>
      </Layout>
    </Space>

    <Drawer
      title="知识片段"
      :visible="fileFragmentVisible"
      @close="fileFragmentVisible = false"
      :width="1000"
    >
      <Table :columns="fileFragmentColumns" :data-source="fileFragmentData">
        <template #bodyCell="{ column, record }">
          <Tooltip v-if="column.key === 'content'" :title="record.content">
            <span>
              {{
                record.content.length > 50
                  ? record.content.slice(0, 50) + '...'
                  : record.content
              }}
            </span>
          </Tooltip>
        </template>
      </Table>
    </Drawer>

    <Drawer
      title="知识库附件"
      :visible="fileVisible"
      @close="fileVisible = false"
      :width="1000"
    >
      <Upload
        :action="uploadUrl"
        :headers="headers"
        :show-upload-list="false"
        accept=".txt,.pdf,.docx,.pptx,.xlsx,.xls,.csv,.json"
        multiple
        name="file"
        :data="{ kid: kid }"
        @change="handleChange"
      >
        <!-- 这里要改成i18n -->
        <a-button type="primary" style="margin-bottom: 10px">
          文件上传
        </a-button>
      </Upload>
      <Table :columns="fileColumns" :data-source="fileData">
        <template #bodyCell="{ column, record }">
          <span v-if="column.key === 'action'">
            <Popconfirm
              title="确定删除吗？"
              ok-text="是"
              cancel-text="否"
              @confirm="handleDeleteFile(record)"
            >
              <Button type="primary" danger style="margin-right: 10px">
                删除附件
              </Button>
            </Popconfirm>

            <Button type="primary" @click="handleFragment(record)"
              >知识片段</Button
            >
          </span>
        </template>
      </Table>
    </Drawer>

    <Drawer
      title="创建知识库"
      :visible="drawerVisible"
      @close="drawerVisible = false"
      :width="600"
      :footer-style="{ textAlign: 'right' }"
    >
      <Form
        :model="formData"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        ref="formRef"
      >
        <FormItem
          label="知识库提供商"
          name="provider"
          :rules="[{ required: true, message: '请选择知识库提供商' }]"
        >
          <Select v-model:value="formData.provider" :options="providerOptions" />
        </FormItem>
        <FormItem
          label="知识库名称"
          name="kname"
          :rules="[{ required: true, message: '请输入知识库名称' }]"
        >
          <Input v-model:value="formData.kname" />
        </FormItem>
        <FormItem
          label="分隔符"
          name="knowledgeSeparator"
        >
          <Input v-model:value="formData.knowledgeSeparator" />
        </FormItem>
        <FormItem
          label="知识库中检索的条数"
          name="retrieveLimit"
          :rules="[{ required: true, message: '请输入知识库中检索的条数' }]"
        >
          <InputNumber
            v-model:value="formData.retrieveLimit"
            style="width: 100%"
          />
        </FormItem>
        <FormItem
          label="文本块大小"
          name="textBlockSize"
          :rules="[{ required: true, message: '请输入文本块大小' }]"
        >
          <InputNumber
            v-model:value="formData.textBlockSize"
            style="width: 100%"
          />
        </FormItem>
        <FormItem
          label="重叠字符"
          name="overlapChar"
        >
          <InputNumber
            v-model:value="formData.overlapChar"
            style="width: 100%"
          />
        </FormItem>
        <FormItem
          label="向量库"
          name="vectorModelName"
          :rules="[{ required: true, message: '请选择向量库' }]"
        >
          <Select v-model:value="formData.vectorModelName" :options="getVector" />
        </FormItem>
        <FormItem label="提问分割符" name="questionSeparator">
          <Input v-model:value="formData.questionSeparator" />
        </FormItem>
        <FormItem
          label="向量模型"
          name="embeddingModelName"
          :rules="[{ required: true, message: '请选择向量模型' }]"
        >
          <Select
            v-model:value="formData.embeddingModelName"
            :options="getVectorModel"
          />
        </FormItem>
        <FormItem label="知识描述" name="description">
          <Input v-model:value="formData.description" type="textarea" />
        </FormItem>

        <!-- 外部知识库配置字段 -->
        <FormItem
          v-if="formData.provider === 'EXTERNAL'"
          label="外部知识库API配置"
          name="externalKnowledgeApiId"
          :rules="[
            {
              required: formData.provider === 'EXTERNAL',
              message: '请选择外部知识库API配置'
            }
          ]"
        >
          <Select
            v-model:value="formData.externalKnowledgeApiId"
            :options="externalApiOptions"
            placeholder="请选择外部知识库API配置"
          />
        </FormItem>

        <FormItem
          v-if="formData.provider === 'EXTERNAL'"
          label="外部知识库ID"
          name="externalKnowledgeId"
          :rules="[
            {
              required: formData.provider === 'EXTERNAL',
              message: '请输入外部知识库ID'
            }
          ]"
        >
          <Input
            v-model:value="formData.externalKnowledgeId"
            placeholder="请输入外部知识库ID"
          />
        </FormItem>

        <FormItem
          label="是否公开"
          name="share"
          :rules="[{ required: true, message: '请选择是否公开' }]"
        >
          <RadioGroup v-model:value="formData.share">
            <Radio :value="1">是</Radio>
            <Radio :value="0">否</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
      <template #footer>
        <a-button style="margin-right: 8px" @click="drawerVisible = false"
          >取消</a-button
        >
        <a-button type="primary" @click="handleSubmit">添加</a-button>
      </template>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import type { RuleObject } from 'ant-design-vue/es/form';

import type { ExternalKnowledgeApiForm } from '#/api/operator/externalKnowledgeApi/model';

import { computed, ref } from 'vue';

import { useVbenModal } from '@vben/common-ui';
import { $t } from '@vben/locales';
import { cloneDeep, getPopupContainer } from '@vben/utils';

import { Button, Form, FormItem, Input, InputPassword, message, Textarea } from 'ant-design-vue';
import { pick } from 'lodash-es';

import {
  externalKnowledgeApiAdd,
  externalKnowledgeApiInfo,
  externalKnowledgeApiUpdate,
  externalKnowledgeApiValidate,
} from '#/api/operator/externalKnowledgeApi';

const emit = defineEmits<{ reload: [] }>();

const isUpdate = ref(false);
const title = computed(() => {
  return isUpdate.value ? '编辑' : '新增';
});

/**
 * 定义默认值 用于reset
 */
const defaultValues: Partial<ExternalKnowledgeApiForm> = {
  id: undefined,
  tenantId: undefined,
  name: undefined,
  description: undefined,
  settings: undefined,
  createBy: undefined,
  updateBy: undefined,
};

/**
 * 表单数据ref (包含拆分的endpoint和apiKey字段)
 */
const formData = ref({
  ...defaultValues,
  endpoint: '',
  apiKey: '',
});

type AntdFormRules<T> = Partial<Record<keyof T, RuleObject[]>> & {
  [key: string]: RuleObject[];
};

/**
 * 表单校验规则
 */
const formRules = ref<AntdFormRules<ExternalKnowledgeApiForm>>({
  name: [{ required: true, message: 'API名称不能为空' }],
  endpoint: [{ required: true, message: 'Endpoint不能为空' }],
  apiKey: [{ required: true, message: 'API Key不能为空' }],
});

/**
 * useForm解构出表单方法
 */
const { validate, validateInfos, resetFields } = Form.useForm(
  formData,
  formRules,
);

const [BasicModal, modalApi] = useVbenModal({
  class: 'w-[700px]',
  fullscreenButton: false,
  closeOnClickModal: false,
  onClosed: handleCancel,
  onConfirm: handleConfirm,
  onOpenChange: async (isOpen) => {
    if (!isOpen) {
      return null;
    }
    modalApi.modalLoading(true);

    const { id } = modalApi.getData() as { id?: number | string };
    isUpdate.value = !!id;

    if (isUpdate.value && id) {
      const record = await externalKnowledgeApiInfo(id);
      const filterRecord = pick(record, Object.keys(defaultValues));

      // 处理settings字段: 后端返回的是JSON字符串,需要解析并拆分为endpoint和apiKey
      if (record.settings) {
        try {
          const settingsObj = JSON.parse(record.settings);
          filterRecord.endpoint = settingsObj.endpoint || '';
          // 注意：后端可能返回api_key(下划线)或apiKey(驼峰)
          filterRecord.apiKey = settingsObj.apiKey || settingsObj.api_key || '';
        } catch (error) {
          filterRecord.endpoint = '';
          filterRecord.apiKey = '';
        }
      } else {
        filterRecord.endpoint = '';
        filterRecord.apiKey = '';
      }

      formData.value = filterRecord;
    } else {
      formData.value = {
        ...defaultValues,
        endpoint: '',
        apiKey: '',
      };
    }

    modalApi.modalLoading(false);
  },
});

async function handleConfirm() {
  try {
    modalApi.modalLoading(true);
    await validate();

    // 将endpoint和apiKey组装成settings对象（使用后端期望的字段名api_key）
    const submitData: ExternalKnowledgeApiForm = {
      ...formData.value,
      settings: {
        endpoint: formData.value.endpoint,
        api_key: formData.value.apiKey, // 后端使用api_key格式
      },
    };

    // 删除临时字段
    delete submitData.endpoint;
    delete submitData.apiKey;

    const data = cloneDeep(submitData);
    await (isUpdate.value
      ? externalKnowledgeApiUpdate(data)
      : externalKnowledgeApiAdd(data));
    emit('reload');
    await handleCancel();
  } catch (error) {
    console.error(error);
  } finally {
    modalApi.modalLoading(false);
  }
}

async function handleCancel() {
  modalApi.close();
  formData.value = {
    ...defaultValues,
    endpoint: '',
    apiKey: '',
  };
  resetFields();
}

// 验证配置
const validating = ref(false);
async function handleValidateConfig() {
  try {
    validating.value = true;

    // 先验证必填字段
    await validate();

    // 将endpoint和apiKey组装成settings对象（使用后端期望的字段名api_key）
    const validateData: ExternalKnowledgeApiForm = {
      ...formData.value,
      settings: {
        endpoint: formData.value.endpoint,
        api_key: formData.value.apiKey, // 后端使用api_key格式
      },
    };

    const data = cloneDeep(validateData);
    const result = await externalKnowledgeApiValidate(data);

    if (result) {
      message.success('配置验证通过');
    } else {
      message.error('配置验证失败');
    }
  } catch (error) {
    console.error(error);
  } finally {
    validating.value = false;
  }
}
</script>

<template>
  <BasicModal :title="title">
    <Form :label-col="{ span: 5 }">
      <FormItem label="租户ID" v-bind="validateInfos.tenantId">
        <Input
          v-model:value="formData.tenantId"
          placeholder="请输入租户ID"
        />
      </FormItem>
      <FormItem label="API名称" v-bind="validateInfos.name">
        <Input
          v-model:value="formData.name"
          placeholder="请输入API名称"
        />
      </FormItem>
      <FormItem label="API描述" v-bind="validateInfos.description">
        <Textarea
          v-model:value="formData.description"
          placeholder="请输入API描述"
          :rows="3"
        />
      </FormItem>
      <FormItem label="Endpoint" v-bind="validateInfos.endpoint">
        <Input
          v-model:value="formData.endpoint"
          placeholder="请输入API端点地址"
        />
      </FormItem>
      <FormItem label="API Key" v-bind="validateInfos.apiKey">
        <InputPassword
          v-model:value="formData.apiKey"
          placeholder="请输入API密钥"
          :visible-toggle="true"
        />
      </FormItem>
      <FormItem :wrapper-col="{ offset: 5 }">
        <Button
          type="primary"
          :loading="validating"
          @click="handleValidateConfig"
        >
          验证配置
        </Button>
      </FormItem>
    </Form>
  </BasicModal>
</template>

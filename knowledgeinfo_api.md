---
title: 标题：ruoyi-ai 接口文档
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# 标题：ruoyi-ai 接口文档

Base URLs:

Email: <a href="mailto:ageerle@163.com">ageerle</a> Web: <a href="https://gitee.com/ageerle/ruoyi-ai">ageerle</a> 

# Authentication

* API Key (apiKey)
    - Parameter Name: **Authorization**, in: header. 

# 外部知识库API管理

<a id="opIdedit_19"></a>

## PUT 修改外部知识库API

PUT /external-knowledge-api

修改外部知识库API

> Body 请求参数

```json
{
  "id": 0,
  "tenantId": "string",
  "name": "string",
  "description": "string",
  "settings": {
    "property1": null,
    "property2": null
  },
  "createBy": "string",
  "updateBy": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ExternalKnowledgeApiBo](#schemaexternalknowledgeapibo)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIdadd_19"></a>

## POST 新增外部知识库API

POST /external-knowledge-api

新增外部知识库API

> Body 请求参数

```json
{
  "id": 0,
  "tenantId": "string",
  "name": "string",
  "description": "string",
  "settings": {
    "property1": null,
    "property2": null
  },
  "createBy": "string",
  "updateBy": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ExternalKnowledgeApiBo](#schemaexternalknowledgeapibo)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIdvalidateConfiguration"></a>

## POST 验证外部知识库API配置

POST /external-knowledge-api/validate

验证外部知识库API配置

> Body 请求参数

```json
{
  "id": 0,
  "tenantId": "string",
  "name": "string",
  "description": "string",
  "settings": {
    "property1": null,
    "property2": null
  },
  "createBy": "string",
  "updateBy": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ExternalKnowledgeApiBo](#schemaexternalknowledgeapibo)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RBoolean](#schemarboolean)|

<a id="opIdgetInfo_22"></a>

## GET 获取外部知识库API详细信息

GET /external-knowledge-api/{id}

获取外部知识库API详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|string| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":{"id":0,"tenantId":"string","name":"string","description":"string","settings":"string","createBy":"string","updateBy":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RExternalKnowledgeApiVo](#schemarexternalknowledgeapivo)|

<a id="opIdgetByTenantId"></a>

## GET 根据租户ID获取API列表

GET /external-knowledge-api/tenant/{tenantId}

根据租户ID获取API列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|tenantId|path|string| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":[{"id":0,"tenantId":"string","name":"string","description":"string","settings":"string","createBy":"string","updateBy":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RListExternalKnowledgeApiVo](#schemarlistexternalknowledgeapivo)|

<a id="opIdlist_25"></a>

## GET 查询外部知识库API列表

GET /external-knowledge-api/list

查询外部知识库API列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|query|integer(int64)| 是 |主键ID|
|tenantId|query|string| 否 |租户ID|
|name|query|string| 是 |API名称|
|description|query|string| 否 |API描述|
|settings|query|object| 是 |API配置设置|
|createBy|query|string| 否 |创建人ID|
|updateBy|query|string| 否 |更新人ID|
|pageSize|query|integer(int32)| 否 |分页大小|
|pageNum|query|integer(int32)| 否 |当前页数|
|orderByColumn|query|string| 否 |排序列|
|isAsc|query|string| 否 |排序的方向desc或者asc|

> 返回示例

> 200 Response

```
{"total":0,"rows":[{"id":0,"tenantId":"string","name":"string","description":"string","settings":"string","createBy":"string","updateBy":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"code":0,"msg":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TableDataInfoExternalKnowledgeApiVo](#schematabledatainfoexternalknowledgeapivo)|

<a id="opIdremove_23"></a>

## DELETE 删除外部知识库API

DELETE /external-knowledge-api/{ids}

删除外部知识库API

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ids|path|array[string]| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

# 知识库管理

<a id="opIdtranslationByFile"></a>

## POST 上传文件翻译

POST /knowledge/translationByFile

上传文件翻译

> Body 请求参数

```json
{
  "file": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|targetLanguage|query|string| 是 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```
"string"
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|

<a id="opIdsave"></a>

## POST 新增知识库

POST /knowledge/save

新增知识库

> Body 请求参数

```json
{
  "createDept": 0,
  "createBy": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateBy": 0,
  "updateTime": "2019-08-24T14:15:22Z",
  "params": {
    "property1": null,
    "property2": null
  },
  "id": 0,
  "kid": "string",
  "uid": 0,
  "kname": "string",
  "provider": "LOCAL",
  "share": 0,
  "description": "string",
  "knowledgeSeparator": "string",
  "questionSeparator": "string",
  "overlapChar": 0,
  "retrieveLimit": 0,
  "textBlockSize": 0,
  "vectorModelName": "string",
  "embeddingModelName": "string",
  "systemPrompt": "string",
  "remark": "string",
  "externalKnowledgeApiId": 0,
  "externalKnowledgeId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[KnowledgeInfoBo](#schemaknowledgeinfobo)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIdremove"></a>

## POST 删除知识库

POST /knowledge/remove/{kid}

删除知识库

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|kid|path|string| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RString](#schemarstring)|

<a id="opIdexport_17"></a>

## POST 导出知识库列表

POST /knowledge/export

导出知识库列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|createDept|query|integer(int64)| 否 |创建部门|
|createBy|query|integer(int64)| 否 |创建者|
|createTime|query|string(date-time)| 否 |创建时间|
|updateBy|query|integer(int64)| 否 |更新者|
|updateTime|query|string(date-time)| 否 |更新时间|
|params|query|object| 否 |请求参数|
|id|query|integer(int64)| 否 |主键|
|kid|query|string| 否 |知识库ID|
|uid|query|integer(int64)| 否 |用户ID|
|kname|query|string| 是 |知识库名称|
|provider|query|string| 是 |知识库提供商类型|
|share|query|integer(int32)| 是 |是否公开知识库（0 否 1是）|
|description|query|string| 否 |描述|
|knowledgeSeparator|query|string| 否 |知识分隔符|
|questionSeparator|query|string| 否 |提问分隔符|
|overlapChar|query|integer(int64)| 否 |重叠字符数|
|retrieveLimit|query|integer(int64)| 否 |知识库中检索的条数|
|textBlockSize|query|integer(int64)| 否 |文本块大小|
|vectorModelName|query|string| 否 |向量库模型名称|
|embeddingModelName|query|string| 否 |向量化模型名称|
|systemPrompt|query|string| 否 |系统提示词|
|remark|query|string| 否 |备注|
|externalKnowledgeApiId|query|integer(int64)| 否 |外部知识库API配置ID（当provider为EXTERNAL时使用）|
|externalKnowledgeId|query|string| 否 |外部知识库ID（当provider为EXTERNAL时使用）|

#### 枚举值

|属性|值|
|---|---|
|provider|LOCAL|
|provider|EXTERNAL|
|provider|FASTGPT|
|provider|DIFY|
|provider|COZE|

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|None|

<a id="opIdedit_24"></a>

## POST 修改知识库

POST /knowledge/edit

修改知识库

> Body 请求参数

```json
{
  "createDept": 0,
  "createBy": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateBy": 0,
  "updateTime": "2019-08-24T14:15:22Z",
  "params": {
    "property1": null,
    "property2": null
  },
  "id": 0,
  "kid": "string",
  "uid": 0,
  "kname": "string",
  "provider": "LOCAL",
  "share": 0,
  "description": "string",
  "knowledgeSeparator": "string",
  "questionSeparator": "string",
  "overlapChar": 0,
  "retrieveLimit": 0,
  "textBlockSize": 0,
  "vectorModelName": "string",
  "embeddingModelName": "string",
  "systemPrompt": "string",
  "remark": "string",
  "externalKnowledgeApiId": 0,
  "externalKnowledgeId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[KnowledgeInfoBo](#schemaknowledgeinfobo)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIdupload_1"></a>

## POST 上传知识库附件

POST /knowledge/attach/upload

上传知识库附件

> Body 请求参数

```json
{
  "file": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|kid|query|string| 是 |none|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":{"property1":null,"property2":null}}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RMapStringObject](#schemarmapstringobject)|

<a id="opIdremoveAttach"></a>

## POST 删除知识库附件（旧版本，保留兼容性）

POST /knowledge/attach/remove/{kid}

删除知识库附件（旧版本，保留兼容性）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|kid|path|string| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIddeleteAttach"></a>

## POST 删除知识库文档（统一接口，支持本地和外部知识库）

POST /knowledge/attach/delete/{knowledgeId}/{docId}

删除知识库文档（统一接口，支持本地和外部知识库）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|knowledgeId|path|string| 是 |none|
|docId|path|string| 是 |none|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":null}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RVoid](#schemarvoid)|

<a id="opIdlist_24"></a>

## GET 根据用户信息查询本地知识库

GET /knowledge/list

根据用户信息查询本地知识库

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|createDept|query|integer(int64)| 否 |创建部门|
|createBy|query|integer(int64)| 否 |创建者|
|createTime|query|string(date-time)| 否 |创建时间|
|updateBy|query|integer(int64)| 否 |更新者|
|updateTime|query|string(date-time)| 否 |更新时间|
|params|query|object| 否 |请求参数|
|id|query|integer(int64)| 否 |主键|
|kid|query|string| 否 |知识库ID|
|uid|query|integer(int64)| 否 |用户ID|
|kname|query|string| 是 |知识库名称|
|provider|query|string| 是 |知识库提供商类型|
|share|query|integer(int32)| 是 |是否公开知识库（0 否 1是）|
|description|query|string| 否 |描述|
|knowledgeSeparator|query|string| 否 |知识分隔符|
|questionSeparator|query|string| 否 |提问分隔符|
|overlapChar|query|integer(int64)| 否 |重叠字符数|
|retrieveLimit|query|integer(int64)| 否 |知识库中检索的条数|
|textBlockSize|query|integer(int64)| 否 |文本块大小|
|vectorModelName|query|string| 否 |向量库模型名称|
|embeddingModelName|query|string| 否 |向量化模型名称|
|systemPrompt|query|string| 否 |系统提示词|
|remark|query|string| 否 |备注|
|externalKnowledgeApiId|query|integer(int64)| 否 |外部知识库API配置ID（当provider为EXTERNAL时使用）|
|externalKnowledgeId|query|string| 否 |外部知识库ID（当provider为EXTERNAL时使用）|
|pageSize|query|integer(int32)| 否 |分页大小|
|pageNum|query|integer(int32)| 否 |当前页数|
|orderByColumn|query|string| 否 |排序列|
|isAsc|query|string| 否 |排序的方向desc或者asc|

#### 枚举值

|属性|值|
|---|---|
|provider|LOCAL|
|provider|EXTERNAL|
|provider|FASTGPT|
|provider|DIFY|
|provider|COZE|

> 返回示例

> 200 Response

```
{"total":0,"rows":[{"id":0,"kid":"string","uid":0,"kname":"string","provider":"LOCAL","share":0,"description":"string","knowledgeSeparator":"string","questionSeparator":"string","overlapChar":0,"retrieveLimit":0,"textBlockSize":0,"vectorModelName":"string","embeddingModelName":"string","systemPrompt":"string","remark":"string"}],"code":0,"msg":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TableDataInfoKnowledgeInfoVo](#schematabledatainfoknowledgeinfovo)|

<a id="opIdlistByRole"></a>

## GET 根据用户信息及知识库角色查询本地知识库

GET /knowledge/listByRole

根据用户信息及知识库角色查询本地知识库

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|createDept|query|integer(int64)| 否 |创建部门|
|createBy|query|integer(int64)| 否 |创建者|
|createTime|query|string(date-time)| 否 |创建时间|
|updateBy|query|integer(int64)| 否 |更新者|
|updateTime|query|string(date-time)| 否 |更新时间|
|params|query|object| 否 |请求参数|
|id|query|integer(int64)| 否 |主键|
|kid|query|string| 否 |知识库ID|
|uid|query|integer(int64)| 否 |用户ID|
|kname|query|string| 是 |知识库名称|
|provider|query|string| 是 |知识库提供商类型|
|share|query|integer(int32)| 是 |是否公开知识库（0 否 1是）|
|description|query|string| 否 |描述|
|knowledgeSeparator|query|string| 否 |知识分隔符|
|questionSeparator|query|string| 否 |提问分隔符|
|overlapChar|query|integer(int64)| 否 |重叠字符数|
|retrieveLimit|query|integer(int64)| 否 |知识库中检索的条数|
|textBlockSize|query|integer(int64)| 否 |文本块大小|
|vectorModelName|query|string| 否 |向量库模型名称|
|embeddingModelName|query|string| 否 |向量化模型名称|
|systemPrompt|query|string| 否 |系统提示词|
|remark|query|string| 否 |备注|
|externalKnowledgeApiId|query|integer(int64)| 否 |外部知识库API配置ID（当provider为EXTERNAL时使用）|
|externalKnowledgeId|query|string| 否 |外部知识库ID（当provider为EXTERNAL时使用）|
|pageSize|query|integer(int32)| 否 |分页大小|
|pageNum|query|integer(int32)| 否 |当前页数|
|orderByColumn|query|string| 否 |排序列|
|isAsc|query|string| 否 |排序的方向desc或者asc|

#### 枚举值

|属性|值|
|---|---|
|provider|LOCAL|
|provider|EXTERNAL|
|provider|FASTGPT|
|provider|DIFY|
|provider|COZE|

> 返回示例

> 200 Response

```
{"total":0,"rows":[{"id":0,"kid":"string","uid":0,"kname":"string","provider":"LOCAL","share":0,"description":"string","knowledgeSeparator":"string","questionSeparator":"string","overlapChar":0,"retrieveLimit":0,"textBlockSize":0,"vectorModelName":"string","embeddingModelName":"string","systemPrompt":"string","remark":"string"}],"code":0,"msg":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TableDataInfoKnowledgeInfoVo](#schematabledatainfoknowledgeinfovo)|

<a id="opIdfragmentList"></a>

## GET 查询知识片段

GET /knowledge/fragment/list/{docId}

查询知识片段

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|docId|path|string| 是 |none|
|createDept|query|integer(int64)| 否 |创建部门|
|createBy|query|integer(int64)| 否 |创建者|
|createTime|query|string(date-time)| 否 |创建时间|
|updateBy|query|integer(int64)| 否 |更新者|
|updateTime|query|string(date-time)| 否 |更新时间|
|params|query|object| 否 |请求参数|
|id|query|integer(int64)| 否 |none|
|kid|query|string| 否 |知识库ID|
|docId|query|string| 否 |文档ID|
|fid|query|string| 否 |知识片段ID|
|idx|query|integer(int64)| 否 |片段索引下标|
|content|query|string| 否 |文档内容|
|remark|query|string| 否 |备注|
|pageSize|query|integer(int32)| 否 |分页大小|
|pageNum|query|integer(int32)| 否 |当前页数|
|orderByColumn|query|string| 否 |排序列|
|isAsc|query|string| 否 |排序的方向desc或者asc|

> 返回示例

> 200 Response

```
{"total":0,"rows":[{"id":0,"kid":"string","docId":"string","fid":"string","idx":0,"content":"string","remark":"string"}],"code":0,"msg":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TableDataInfoKnowledgeFragmentVo](#schematabledatainfoknowledgefragmentvo)|

<a id="opIdattach"></a>

## GET 查询知识附件信息

GET /knowledge/detail/{kid}

查询知识附件信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|kid|path|string| 是 |none|
|createDept|query|integer(int64)| 否 |创建部门|
|createBy|query|integer(int64)| 否 |创建者|
|createTime|query|string(date-time)| 否 |创建时间|
|updateBy|query|integer(int64)| 否 |更新者|
|updateTime|query|string(date-time)| 否 |更新时间|
|params|query|object| 否 |请求参数|
|id|query|integer(int64)| 否 |none|
|kid|query|string| 否 |知识库ID|
|docId|query|string| 否 |文档ID|
|docName|query|string| 否 |文档名称|
|docType|query|string| 否 |文档类型|
|content|query|string| 否 |文档内容|
|remark|query|string| 否 |备注|
|ossId|query|integer(int64)| 否 |对象存储主键|
|picStatus|query|integer(int32)| 否 |拆解图片状态10未开始，20进行中，30已完成|
|picAnysStatus|query|integer(int32)| 否 |分析图片状态10未开始，20进行中，30已完成|
|vectorStatus|query|integer(int32)| 否 |写入向量数据库状态10未开始，20进行中，30已完成|
|pageSize|query|integer(int32)| 否 |分页大小|
|pageNum|query|integer(int32)| 否 |当前页数|
|orderByColumn|query|string| 否 |排序列|
|isAsc|query|string| 否 |排序的方向desc或者asc|

> 返回示例

> 200 Response

```
{"total":0,"rows":[{"id":0,"kid":"string","docId":"string","docName":"string","docType":"string","content":"string","remark":"string","ossId":0,"picStatus":0,"picAnysStatus":0,"vectorStatus":0}],"code":0,"msg":"string"}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[TableDataInfoKnowledgeAttachVo](#schematabledatainfoknowledgeattachvo)|

<a id="opIdgetAttachInfo"></a>

## GET 获取知识库附件详细信息

GET /knowledge/attach/info/{id}

获取知识库附件详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |主键|

> 返回示例

> 200 Response

```
{"code":0,"msg":"string","data":{"id":0,"kid":"string","docId":"string","docName":"string","docType":"string","content":"string","remark":"string","ossId":0,"picStatus":0,"picAnysStatus":0,"vectorStatus":0}}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[RKnowledgeAttachVo](#schemarknowledgeattachvo)|

# 数据模型

<h2 id="tocS_RVoid">RVoid</h2>

<a id="schemarvoid"></a>
<a id="schema_RVoid"></a>
<a id="tocSrvoid"></a>
<a id="tocsrvoid"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": null
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|any|false|none||none|

<h2 id="tocS_ExternalKnowledgeApiBo">ExternalKnowledgeApiBo</h2>

<a id="schemaexternalknowledgeapibo"></a>
<a id="schema_ExternalKnowledgeApiBo"></a>
<a id="tocSexternalknowledgeapibo"></a>
<a id="tocsexternalknowledgeapibo"></a>

```json
{
  "id": 0,
  "tenantId": "string",
  "name": "string",
  "description": "string",
  "settings": {
    "property1": null,
    "property2": null
  },
  "createBy": "string",
  "updateBy": "string"
}

```

外部知识库API业务对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||主键ID|
|tenantId|string|false|none||租户ID|
|name|string|true|none||API名称|
|description|string|false|none||API描述|
|settings|object|true|none||API配置设置|
|» **additionalProperties**|any|false|none||none|
|createBy|string|false|none||创建人ID|
|updateBy|string|false|none||更新人ID|

<h2 id="tocS_KnowledgeInfoBo">KnowledgeInfoBo</h2>

<a id="schemaknowledgeinfobo"></a>
<a id="schema_KnowledgeInfoBo"></a>
<a id="tocSknowledgeinfobo"></a>
<a id="tocsknowledgeinfobo"></a>

```json
{
  "createDept": 0,
  "createBy": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateBy": 0,
  "updateTime": "2019-08-24T14:15:22Z",
  "params": {
    "property1": null,
    "property2": null
  },
  "id": 0,
  "kid": "string",
  "uid": 0,
  "kname": "string",
  "provider": "LOCAL",
  "share": 0,
  "description": "string",
  "knowledgeSeparator": "string",
  "questionSeparator": "string",
  "overlapChar": 0,
  "retrieveLimit": 0,
  "textBlockSize": 0,
  "vectorModelName": "string",
  "embeddingModelName": "string",
  "systemPrompt": "string",
  "remark": "string",
  "externalKnowledgeApiId": 0,
  "externalKnowledgeId": "string"
}

```

知识库业务对象 knowledge_info

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|createDept|integer(int64)|false|none||创建部门|
|createBy|integer(int64)|false|none||创建者|
|createTime|string(date-time)|false|none||创建时间|
|updateBy|integer(int64)|false|none||更新者|
|updateTime|string(date-time)|false|none||更新时间|
|params|object|false|none||请求参数|
|» **additionalProperties**|any|false|none||none|
|id|integer(int64)|false|none||主键|
|kid|string|false|none||知识库ID|
|uid|integer(int64)|false|none||用户ID|
|kname|string|true|none||知识库名称|
|provider|string|true|none||知识库提供商类型|
|share|integer(int32)|true|none||是否公开知识库（0 否 1是）|
|description|string|false|none||描述|
|knowledgeSeparator|string|false|none||知识分隔符|
|questionSeparator|string|false|none||提问分隔符|
|overlapChar|integer(int64)|false|none||重叠字符数|
|retrieveLimit|integer(int64)|false|none||知识库中检索的条数|
|textBlockSize|integer(int64)|false|none||文本块大小|
|vectorModelName|string|false|none||向量库模型名称|
|embeddingModelName|string|false|none||向量化模型名称|
|systemPrompt|string|false|none||系统提示词|
|remark|string|false|none||备注|
|externalKnowledgeApiId|integer(int64)|false|none||外部知识库API配置ID（当provider为EXTERNAL时使用）|
|externalKnowledgeId|string|false|none||外部知识库ID（当provider为EXTERNAL时使用）|

#### 枚举值

|属性|值|
|---|---|
|provider|LOCAL|
|provider|EXTERNAL|
|provider|FASTGPT|
|provider|DIFY|
|provider|COZE|

<h2 id="tocS_RString">RString</h2>

<a id="schemarstring"></a>
<a id="schema_RString"></a>
<a id="tocSrstring"></a>
<a id="tocsrstring"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": "string"
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|string|false|none||none|

<h2 id="tocS_RMapStringObject">RMapStringObject</h2>

<a id="schemarmapstringobject"></a>
<a id="schema_RMapStringObject"></a>
<a id="tocSrmapstringobject"></a>
<a id="tocsrmapstringobject"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "property1": null,
    "property2": null
  }
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|object|false|none||none|
|» **additionalProperties**|any|false|none||none|

<h2 id="tocS_RBoolean">RBoolean</h2>

<a id="schemarboolean"></a>
<a id="schema_RBoolean"></a>
<a id="tocSrboolean"></a>
<a id="tocsrboolean"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": true
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|boolean|false|none||none|

<h2 id="tocS_KnowledgeInfoVo">KnowledgeInfoVo</h2>

<a id="schemaknowledgeinfovo"></a>
<a id="schema_KnowledgeInfoVo"></a>
<a id="tocSknowledgeinfovo"></a>
<a id="tocsknowledgeinfovo"></a>

```json
{
  "id": 0,
  "kid": "string",
  "uid": 0,
  "kname": "string",
  "provider": "LOCAL",
  "share": 0,
  "description": "string",
  "knowledgeSeparator": "string",
  "questionSeparator": "string",
  "overlapChar": 0,
  "retrieveLimit": 0,
  "textBlockSize": 0,
  "vectorModelName": "string",
  "embeddingModelName": "string",
  "systemPrompt": "string",
  "remark": "string"
}

```

知识库视图对象 knowledge_info

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|kid|string|false|none||知识库ID|
|uid|integer(int64)|false|none||用户ID|
|kname|string|false|none||知识库名称|
|provider|string|false|none||知识库提供商类型|
|share|integer(int32)|false|none||是否公开知识库（0 否 1是）|
|description|string|false|none||描述|
|knowledgeSeparator|string|false|none||知识分隔符|
|questionSeparator|string|false|none||提问分隔符|
|overlapChar|integer(int32)|false|none||重叠字符数|
|retrieveLimit|integer(int32)|false|none||知识库中检索的条数|
|textBlockSize|integer(int32)|false|none||文本块大小|
|vectorModelName|string|false|none||向量库模型名称|
|embeddingModelName|string|false|none||向量化模型名称|
|systemPrompt|string|false|none||系统提示词|
|remark|string|false|none||备注|

#### 枚举值

|属性|值|
|---|---|
|provider|LOCAL|
|provider|EXTERNAL|
|provider|FASTGPT|
|provider|DIFY|
|provider|COZE|

<h2 id="tocS_TableDataInfoKnowledgeInfoVo">TableDataInfoKnowledgeInfoVo</h2>

<a id="schematabledatainfoknowledgeinfovo"></a>
<a id="schema_TableDataInfoKnowledgeInfoVo"></a>
<a id="tocStabledatainfoknowledgeinfovo"></a>
<a id="tocstabledatainfoknowledgeinfovo"></a>

```json
{
  "total": 0,
  "rows": [
    {
      "id": 0,
      "kid": "string",
      "uid": 0,
      "kname": "string",
      "provider": "LOCAL",
      "share": 0,
      "description": "string",
      "knowledgeSeparator": "string",
      "questionSeparator": "string",
      "overlapChar": 0,
      "retrieveLimit": 0,
      "textBlockSize": 0,
      "vectorModelName": "string",
      "embeddingModelName": "string",
      "systemPrompt": "string",
      "remark": "string"
    }
  ],
  "code": 0,
  "msg": "string"
}

```

表格分页数据对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|total|integer(int64)|false|none||总记录数|
|rows|[[KnowledgeInfoVo](#schemaknowledgeinfovo)]|false|none||列表数据|
|code|integer(int32)|false|none||消息状态码|
|msg|string|false|none||消息内容|

<h2 id="tocS_KnowledgeFragmentVo">KnowledgeFragmentVo</h2>

<a id="schemaknowledgefragmentvo"></a>
<a id="schema_KnowledgeFragmentVo"></a>
<a id="tocSknowledgefragmentvo"></a>
<a id="tocsknowledgefragmentvo"></a>

```json
{
  "id": 0,
  "kid": "string",
  "docId": "string",
  "fid": "string",
  "idx": 0,
  "content": "string",
  "remark": "string"
}

```

知识片段视图对象 knowledge_fragment

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|kid|string|false|none||知识库ID|
|docId|string|false|none||文档ID|
|fid|string|false|none||知识片段ID|
|idx|integer(int64)|false|none||片段索引下标|
|content|string|false|none||文档内容|
|remark|string|false|none||备注|

<h2 id="tocS_TableDataInfoKnowledgeFragmentVo">TableDataInfoKnowledgeFragmentVo</h2>

<a id="schematabledatainfoknowledgefragmentvo"></a>
<a id="schema_TableDataInfoKnowledgeFragmentVo"></a>
<a id="tocStabledatainfoknowledgefragmentvo"></a>
<a id="tocstabledatainfoknowledgefragmentvo"></a>

```json
{
  "total": 0,
  "rows": [
    {
      "id": 0,
      "kid": "string",
      "docId": "string",
      "fid": "string",
      "idx": 0,
      "content": "string",
      "remark": "string"
    }
  ],
  "code": 0,
  "msg": "string"
}

```

表格分页数据对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|total|integer(int64)|false|none||总记录数|
|rows|[[KnowledgeFragmentVo](#schemaknowledgefragmentvo)]|false|none||列表数据|
|code|integer(int32)|false|none||消息状态码|
|msg|string|false|none||消息内容|

<h2 id="tocS_KnowledgeAttachVo">KnowledgeAttachVo</h2>

<a id="schemaknowledgeattachvo"></a>
<a id="schema_KnowledgeAttachVo"></a>
<a id="tocSknowledgeattachvo"></a>
<a id="tocsknowledgeattachvo"></a>

```json
{
  "id": 0,
  "kid": "string",
  "docId": "string",
  "docName": "string",
  "docType": "string",
  "content": "string",
  "remark": "string",
  "ossId": 0,
  "picStatus": 0,
  "picAnysStatus": 0,
  "vectorStatus": 0
}

```

知识库附件视图对象 knowledge_attach

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|kid|string|false|none||知识库ID|
|docId|string|false|none||文档ID|
|docName|string|false|none||文档名称|
|docType|string|false|none||文档类型|
|content|string|false|none||文档内容|
|remark|string|false|none||备注|
|ossId|integer(int64)|false|none||对象存储主键|
|picStatus|integer(int32)|false|none||拆解图片状态10未开始，20进行中，30已完成|
|picAnysStatus|integer(int32)|false|none||分析图片状态10未开始，20进行中，30已完成|
|vectorStatus|integer(int32)|false|none||写入向量数据库状态10未开始，20进行中，30已完成|

<h2 id="tocS_TableDataInfoKnowledgeAttachVo">TableDataInfoKnowledgeAttachVo</h2>

<a id="schematabledatainfoknowledgeattachvo"></a>
<a id="schema_TableDataInfoKnowledgeAttachVo"></a>
<a id="tocStabledatainfoknowledgeattachvo"></a>
<a id="tocstabledatainfoknowledgeattachvo"></a>

```json
{
  "total": 0,
  "rows": [
    {
      "id": 0,
      "kid": "string",
      "docId": "string",
      "docName": "string",
      "docType": "string",
      "content": "string",
      "remark": "string",
      "ossId": 0,
      "picStatus": 0,
      "picAnysStatus": 0,
      "vectorStatus": 0
    }
  ],
  "code": 0,
  "msg": "string"
}

```

表格分页数据对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|total|integer(int64)|false|none||总记录数|
|rows|[[KnowledgeAttachVo](#schemaknowledgeattachvo)]|false|none||列表数据|
|code|integer(int32)|false|none||消息状态码|
|msg|string|false|none||消息内容|

<h2 id="tocS_RKnowledgeAttachVo">RKnowledgeAttachVo</h2>

<a id="schemarknowledgeattachvo"></a>
<a id="schema_RKnowledgeAttachVo"></a>
<a id="tocSrknowledgeattachvo"></a>
<a id="tocsrknowledgeattachvo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "id": 0,
    "kid": "string",
    "docId": "string",
    "docName": "string",
    "docType": "string",
    "content": "string",
    "remark": "string",
    "ossId": 0,
    "picStatus": 0,
    "picAnysStatus": 0,
    "vectorStatus": 0
  }
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|[KnowledgeAttachVo](#schemaknowledgeattachvo)|false|none||知识库附件视图对象 knowledge_attach|

<h2 id="tocS_ExternalKnowledgeApiVo">ExternalKnowledgeApiVo</h2>

<a id="schemaexternalknowledgeapivo"></a>
<a id="schema_ExternalKnowledgeApiVo"></a>
<a id="tocSexternalknowledgeapivo"></a>
<a id="tocsexternalknowledgeapivo"></a>

```json
{
  "id": 0,
  "tenantId": "string",
  "name": "string",
  "description": "string",
  "settings": "string",
  "createBy": "string",
  "updateBy": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

外部知识库API视图对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||主键ID|
|tenantId|string|false|none||租户ID|
|name|string|false|none||API名称|
|description|string|false|none||API描述|
|settings|string|false|none||API配置设置(JSON格式)|
|createBy|string|false|none||创建人ID|
|updateBy|string|false|none||更新人ID|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_RExternalKnowledgeApiVo">RExternalKnowledgeApiVo</h2>

<a id="schemarexternalknowledgeapivo"></a>
<a id="schema_RExternalKnowledgeApiVo"></a>
<a id="tocSrexternalknowledgeapivo"></a>
<a id="tocsrexternalknowledgeapivo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": {
    "id": 0,
    "tenantId": "string",
    "name": "string",
    "description": "string",
    "settings": "string",
    "createBy": "string",
    "updateBy": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  }
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|[ExternalKnowledgeApiVo](#schemaexternalknowledgeapivo)|false|none||外部知识库API视图对象|

<h2 id="tocS_RListExternalKnowledgeApiVo">RListExternalKnowledgeApiVo</h2>

<a id="schemarlistexternalknowledgeapivo"></a>
<a id="schema_RListExternalKnowledgeApiVo"></a>
<a id="tocSrlistexternalknowledgeapivo"></a>
<a id="tocsrlistexternalknowledgeapivo"></a>

```json
{
  "code": 0,
  "msg": "string",
  "data": [
    {
      "id": 0,
      "tenantId": "string",
      "name": "string",
      "description": "string",
      "settings": "string",
      "createBy": "string",
      "updateBy": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

响应信息主体

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|msg|string|false|none||none|
|data|[[ExternalKnowledgeApiVo](#schemaexternalknowledgeapivo)]|false|none||[外部知识库API视图对象]|

<h2 id="tocS_TableDataInfoExternalKnowledgeApiVo">TableDataInfoExternalKnowledgeApiVo</h2>

<a id="schematabledatainfoexternalknowledgeapivo"></a>
<a id="schema_TableDataInfoExternalKnowledgeApiVo"></a>
<a id="tocStabledatainfoexternalknowledgeapivo"></a>
<a id="tocstabledatainfoexternalknowledgeapivo"></a>

```json
{
  "total": 0,
  "rows": [
    {
      "id": 0,
      "tenantId": "string",
      "name": "string",
      "description": "string",
      "settings": "string",
      "createBy": "string",
      "updateBy": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "code": 0,
  "msg": "string"
}

```

表格分页数据对象

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|total|integer(int64)|false|none||总记录数|
|rows|[[ExternalKnowledgeApiVo](#schemaexternalknowledgeapivo)]|false|none||列表数据|
|code|integer(int32)|false|none||消息状态码|
|msg|string|false|none||消息内容|


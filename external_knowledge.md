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

- HTTP Authentication, scheme: bearer

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


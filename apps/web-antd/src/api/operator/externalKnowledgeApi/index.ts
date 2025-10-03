import type {
  ExternalKnowledgeApiForm,
  ExternalKnowledgeApiQuery,
  ExternalKnowledgeApiVO,
} from './model';

import type { ID, IDS, PageResult } from '#/api/common';

import { requestClient } from '#/api/request';

/**
 * 查询外部知识库API列表
 * @param params
 * @returns 外部知识库API列表
 */
export function externalKnowledgeApiList(
  params?: ExternalKnowledgeApiQuery,
) {
  return requestClient.get<PageResult<ExternalKnowledgeApiVO>>(
    '/external-knowledge-api/list',
    {
      params,
    },
  );
}

/**
 * 查询外部知识库API详情
 * @param id id
 * @returns 外部知识库API详情
 */
export function externalKnowledgeApiInfo(id: ID) {
  return requestClient.get<ExternalKnowledgeApiVO>(
    `/external-knowledge-api/${id}`,
  );
}

/**
 * 新增外部知识库API
 * @param data
 * @returns void
 */
export function externalKnowledgeApiAdd(data: ExternalKnowledgeApiForm) {
  return requestClient.postWithMsg<void>('/external-knowledge-api', data);
}

/**
 * 更新外部知识库API
 * @param data
 * @returns void
 */
export function externalKnowledgeApiUpdate(data: ExternalKnowledgeApiForm) {
  return requestClient.putWithMsg<void>('/external-knowledge-api', data);
}

/**
 * 删除外部知识库API
 * @param id id
 * @returns void
 */
export function externalKnowledgeApiRemove(id: ID | IDS) {
  return requestClient.deleteWithMsg<void>(`/external-knowledge-api/${id}`);
}

/**
 * 验证外部知识库API配置
 * @param data
 * @returns boolean
 */
export function externalKnowledgeApiValidate(data: ExternalKnowledgeApiForm) {
  return requestClient.post<boolean>(
    '/external-knowledge-api/validate',
    data,
  );
}

/**
 * 根据租户ID获取API列表
 * @param tenantId 租户ID
 * @returns API列表
 */
export function externalKnowledgeApiGetByTenantId(tenantId: string) {
  return requestClient.get<ExternalKnowledgeApiVO[]>(
    `/external-knowledge-api/tenant/${tenantId}`,
  );
}

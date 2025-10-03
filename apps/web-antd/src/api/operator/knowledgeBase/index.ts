import { requestClient } from '#/api/request';

enum Api {
  knowledgeList = '/knowledge/list',
  knowledgeDelete = '/knowledge/remove',
  knowledgeSave = '/knowledge/save',
  knowledgeDetail = '/knowledge/detail',
  knowledgeFileDelete = '/knowledge/attach/remove',
  knowledgeFileDeleteByKnowledge = '/knowledge/attach/delete',
  knowledgeFragmentList = '/knowledge/fragment/list',
}

// 获取列表
export function knowledgeList() {
  return requestClient.get<any>(Api.knowledgeList);
}

// 删除
export function knowledgeDelete(id: any) {
  return requestClient.post<any>(`${Api.knowledgeDelete}/${id}`);
}

// 新增
export function knowledgeSave(data: any) {
  return requestClient.post<any>(Api.knowledgeSave, data);
}

// 获取附件列表
export function knowledgeDetail(id: any) {
  return requestClient.get<any>(`${Api.knowledgeDetail}/${id}`);
}

// 附件删除
export function knowledgeFileDelete(id: any) {
  return requestClient.post<any>(`${Api.knowledgeFileDelete}/${id}`);
}

// 根据知识库ID和文档ID删除附件
export function knowledgeFileDeleteByKnowledge(knowledgeId: any, docId: any) {
  return requestClient.post<any>(`${Api.knowledgeFileDeleteByKnowledge}/${knowledgeId}/${docId}`);
}

// 知识片段列表
export function knowledgeFragmentList(id: any) {
  return requestClient.get<any>(`${Api.knowledgeFragmentList}/${id}`);
}

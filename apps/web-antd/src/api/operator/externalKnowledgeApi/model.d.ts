import type { BaseEntity, PageQuery } from '#/api/common';

export interface ExternalKnowledgeApiVO {
  /**
   * 主键ID
   */
  id: number | string;

  /**
   * 租户ID
   */
  tenantId: string;

  /**
   * API名称
   */
  name: string;

  /**
   * API描述
   */
  description: string;

  /**
   * API配置设置(JSON格式)
   */
  settings: string;

  /**
   * 创建人ID
   */
  createBy: string;

  /**
   * 更新人ID
   */
  updateBy: string;

  /**
   * 创建时间
   */
  createTime: string;

  /**
   * 更新时间
   */
  updateTime: string;
}

export interface ExternalKnowledgeApiForm extends BaseEntity {
  /**
   * 主键ID
   */
  id?: number | string;

  /**
   * 租户ID
   */
  tenantId?: string;

  /**
   * API名称
   */
  name?: string;

  /**
   * API描述
   */
  description?: string;

  /**
   * API配置设置
   */
  settings?: Record<string, any>;

  /**
   * 创建人ID
   */
  createBy?: string;

  /**
   * 更新人ID
   */
  updateBy?: string;
}

export interface ExternalKnowledgeApiQuery extends PageQuery {
  /**
   * 租户ID
   */
  tenantId?: string;

  /**
   * API名称
   */
  name?: string;

  /**
   * API描述
   */
  description?: string;

  /**
   * 日期范围参数
   */
  params?: any;
}

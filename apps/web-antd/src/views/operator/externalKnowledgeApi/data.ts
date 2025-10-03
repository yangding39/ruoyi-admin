import type { FormSchemaGetter } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';

export const querySchema: FormSchemaGetter = () => [
  {
    component: 'Input',
    fieldName: 'name',
    label: 'API名称',
  },
  {
    component: 'Input',
    fieldName: 'tenantId',
    label: '租户ID',
  },
  {
    component: 'RangePicker',
    fieldName: 'createTime',
    label: '创建时间',
  },
];

export const columns: VxeGridProps['columns'] = [
  { type: 'checkbox', width: 60 },
  {
    title: 'ID',
    field: 'id',
    width: 80,
  },
  {
    title: '租户ID',
    field: 'tenantId',
    width: 150,
  },
  {
    title: 'API名称',
    field: 'name',
    minWidth: 150,
  },
  {
    title: 'API描述',
    field: 'description',
    minWidth: 200,
  },
  {
    title: '创建人',
    field: 'createBy',
    width: 120,
  },
  {
    title: '创建时间',
    field: 'createTime',
    width: 180,
  },
  {
    title: '更新时间',
    field: 'updateTime',
    width: 180,
  },
  {
    field: 'action',
    fixed: 'right',
    slots: { default: 'action' },
    title: '操作',
    width: 200,
  },
];

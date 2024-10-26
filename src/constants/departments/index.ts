import { Department, DepartmentList } from './types';

export const DEPARTMENTS: DepartmentList = Object.freeze({
  ADMINISTRATION: {
    name: '総務部',
    id: 1,
  },
  ACCOUNTING: {
    name: '経理部',
    id: 2,
  },
  SALES: {
    name: '営業部',
    id: 3,
  }
} as const);

export { Department, DepartmentList };
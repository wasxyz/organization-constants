import { DEPARTMENTS, Department } from '../constants/departments';

export function getDepartmentById(id: number): Department | undefined {
  return Object.values(DEPARTMENTS).find(dept => dept.id === id);
}

export function getChildDepartments(parentId: number): Department[] {
  return Object.values(DEPARTMENTS).filter(
    dept => dept.parentDepartmentId === parentId
  );
}
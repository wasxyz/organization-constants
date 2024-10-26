import { Department } from '../constants/departments';
export declare function getDepartmentById(id: number): Department | undefined;
export declare function getChildDepartments(parentId: number): Department[];

export interface Department {
    name: string;
    id: number;
    managerId?: number;
    parentDepartmentId?: number;
}
export interface DepartmentList {
    [key: string]: Department;
}

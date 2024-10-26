export interface EmploymentType {
    name: string;
    id: number;
    workHoursPerWeek: number;
    benefits: boolean;
    paidLeave: boolean;
    contractPeriod?: number;
    description?: string;
}
export interface EmploymentTypeList {
    [key: string]: EmploymentType;
}

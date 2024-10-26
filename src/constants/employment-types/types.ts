export interface EmploymentType {
  name: string;
  id: number;
  workHoursPerWeek: number;
  benefits: boolean;
  paidLeave: boolean;
  contractPeriod?: number; // 契約期間（月数）
  description?: string;
}

export interface EmploymentTypeList {
  [key: string]: EmploymentType;
}
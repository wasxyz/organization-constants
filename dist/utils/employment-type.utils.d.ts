import { EmploymentType } from '../constants/employment-types';
export declare function getEmploymentTypeById(id: number): EmploymentType | undefined;
export declare function isFullTimeEmployee(type: EmploymentType): boolean;
export declare function hasFullBenefits(type: EmploymentType): boolean;
export declare function isTemporaryPosition(type: EmploymentType): boolean;

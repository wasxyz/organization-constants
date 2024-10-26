import { EMPLOYMENT_TYPES, EmploymentType } from '../constants/employment-types';

export function getEmploymentTypeById(id: number): EmploymentType | undefined {
  return Object.values(EMPLOYMENT_TYPES).find(type => type.id === id);
}

export function isFullTimeEmployee(type: EmploymentType): boolean {
  return type.workHoursPerWeek >= 40;
}

export function hasFullBenefits(type: EmploymentType): boolean {
  return type.benefits === true;
}

export function isTemporaryPosition(type: EmploymentType): boolean {
  return type.contractPeriod !== undefined;
}
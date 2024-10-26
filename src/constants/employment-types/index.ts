import { EmploymentType, EmploymentTypeList } from './types';

export const EMPLOYMENT_TYPES: EmploymentTypeList = Object.freeze({
  FULL_TIME: {
    name: '正社員',
    id: 1,
    workHoursPerWeek: 40,
    benefits: true,
    paidLeave: true,
    description: '無期雇用の正社員'
  },
  CONTRACT: {
    name: '契約社員',
    id: 2,
    workHoursPerWeek: 40,
    benefits: true,
    paidLeave: true,
    contractPeriod: 12,
    description: '有期雇用の契約社員'
  },
  PART_TIME: {
    name: 'パートタイム',
    id: 3,
    workHoursPerWeek: 20,
    benefits: false,
    paidLeave: true,
    description: '短時間勤務のパートタイム社員'
  },
  TEMPORARY: {
    name: 'アルバイト',
    id: 4,
    workHoursPerWeek: 20,
    benefits: false,
    paidLeave: true,
    description: '短期・短時間勤務のアルバイト'
  },
  INTERN: {
    name: 'インターン',
    id: 5,
    workHoursPerWeek: 30,
    benefits: false,
    paidLeave: false,
    contractPeriod: 3,
    description: '期間限定のインターンシップ'
  }
} as const);

export { EmploymentType, EmploymentTypeList };
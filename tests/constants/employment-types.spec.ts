import { EMPLOYMENT_TYPES } from '../../src/constants/employment-types';
import { 
  getEmploymentTypeById,
  isFullTimeEmployee,
  hasFullBenefits 
} from '../../src/utils/employment-type.utils';

describe('Employment Types', () => {
  it('should have unique IDs', () => {
    const ids = Object.values(EMPLOYMENT_TYPES).map(type => type.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });

  it('should find employment type by ID', () => {
    const fullTime = getEmploymentTypeById(1);
    expect(fullTime).toBeDefined();
    expect(fullTime?.name).toBe('正社員');
  });

  it('should correctly identify full-time employees', () => {
    const fullTime = EMPLOYMENT_TYPES.FULL_TIME;
    const partTime = EMPLOYMENT_TYPES.PART_TIME;
    
    expect(isFullTimeEmployee(fullTime)).toBeTruthy();
    expect(isFullTimeEmployee(partTime)).toBeFalsy();
  });

  it('should correctly check benefits eligibility', () => {
    const fullTime = EMPLOYMENT_TYPES.FULL_TIME;
    const partTime = EMPLOYMENT_TYPES.PART_TIME;
    
    expect(hasFullBenefits(fullTime)).toBeTruthy();
    expect(hasFullBenefits(partTime)).toBeFalsy();
  });
});
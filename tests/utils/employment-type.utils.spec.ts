import { 
  isFullTimeEmployee,
  hasFullBenefits,
  isTemporaryPosition 
} from '../../src/utils/employment-type.utils';
import { EMPLOYMENT_TYPES } from '../../src/constants/employment-types';

describe('Employment Type Utils', () => {
  test('isFullTimeEmployee should correctly identify full-time positions', () => {
    expect(isFullTimeEmployee(EMPLOYMENT_TYPES.FULL_TIME)).toBe(true);
    expect(isFullTimeEmployee(EMPLOYMENT_TYPES.PART_TIME)).toBe(false);
  });

  test('hasFullBenefits should return true only for eligible types', () => {
    expect(hasFullBenefits(EMPLOYMENT_TYPES.FULL_TIME)).toBe(true);
    expect(hasFullBenefits(EMPLOYMENT_TYPES.PART_TIME)).toBe(false);
  });

  test('isTemporaryPosition should identify contract-based positions', () => {
    expect(isTemporaryPosition(EMPLOYMENT_TYPES.CONTRACT)).toBe(true);
    expect(isTemporaryPosition(EMPLOYMENT_TYPES.FULL_TIME)).toBe(false);
  });
});
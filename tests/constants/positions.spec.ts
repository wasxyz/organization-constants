import { POSITIONS } from '../../src/constants/positions';

describe('Positions Constants', () => {
  test('should have correct position ranks', () => {
    expect(POSITIONS.PRESIDENT.rank).toBe(1);
    expect(POSITIONS.DEPARTMENT_MANAGER.rank).toBe(2);
    expect(POSITIONS.SECTION_MANAGER.rank).toBe(3);
  });

  test('should have correct allowances', () => {
    expect(POSITIONS.PRESIDENT.allowances).toBe(200000);
    expect(POSITIONS.DEPARTMENT_MANAGER.allowances).toBe(100000);
    expect(POSITIONS.SECTION_MANAGER.allowances).toBe(50000);
  });
});
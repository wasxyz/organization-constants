import { DEPARTMENTS, Department } from '../../src/constants/departments';

describe('Departments Constants', () => {
  test('should have valid department structure', () => {
    expect(DEPARTMENTS.ADMINISTRATION).toBeDefined();
    expect(DEPARTMENTS.ADMINISTRATION.name).toBe('総務部');
    expect(DEPARTMENTS.ADMINISTRATION.id).toBe(1);
  });

  test('should be immutable', () => {
    expect(() => {
      (DEPARTMENTS as any).NEW_DEPT = {
        name: '新部門',
        id: 99
      };
    }).toThrow();
  });
});
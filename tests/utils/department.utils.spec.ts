import { getDepartmentById, getChildDepartments } from '../../src/utils/department.utils';
import { DEPARTMENTS, Department } from '../../src/constants/departments';

describe('Department Utils', () => {
  describe('getDepartmentById', () => {
    test('should return correct department for ID 1', () => {
      const dept = getDepartmentById(1);
      expect(dept).toBeDefined();
      expect(dept?.name).toBe('総務部');
      expect(dept?.id).toBe(1);
    });

    test('should return correct department for ID 2', () => {
      const dept = getDepartmentById(2);
      expect(dept).toBeDefined();
      expect(dept?.name).toBe('経理部');
      expect(dept?.id).toBe(2);
    });

    test('should return undefined for non-existent ID', () => {
      const dept = getDepartmentById(999);
      expect(dept).toBeUndefined();
    });
  });

  describe('getChildDepartments', () => {
    test('should return empty array when no children exist', () => {
      const children = getChildDepartments(1);
      expect(children).toHaveLength(0);
    });

    test('should return empty array for non-existent parent ID', () => {
      const children = getChildDepartments(999);
      expect(children).toHaveLength(0);
    });

    test('should return empty array for department with no children', () => {
      const children = getChildDepartments(2);
      expect(children).toHaveLength(0);
    });
  });
});
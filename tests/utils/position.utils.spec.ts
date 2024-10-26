import { POSITIONS } from '../../src/constants/positions';
import { getPositionByRank, isManagementPosition } from '../../src/utils/position.utils';

describe('Position Utils', () => {
  describe('getPositionByRank', () => {
    test('should return correct position for rank 1', () => {
      const position = getPositionByRank(1);
      expect(position).toBeDefined();
      expect(position?.name).toBe('社長');
      expect(position?.allowances).toBe(200000);
    });

    test('should return correct position for rank 2', () => {
      const position = getPositionByRank(2);
      expect(position).toBeDefined();
      expect(position?.name).toBe('部長');
      expect(position?.allowances).toBe(100000);
    });

    test('should return correct position for rank 3', () => {
      const position = getPositionByRank(3);
      expect(position).toBeDefined();
      expect(position?.name).toBe('課長');
      expect(position?.allowances).toBe(50000);
    });

    test('should return undefined for non-existent rank', () => {
      const position = getPositionByRank(999);
      expect(position).toBeUndefined();
    });
  });

  describe('isManagementPosition', () => {
    test('should return true for president (rank 1)', () => {
      expect(isManagementPosition(POSITIONS.PRESIDENT)).toBe(true);
    });

    test('should return true for department manager (rank 2)', () => {
      expect(isManagementPosition(POSITIONS.DEPARTMENT_MANAGER)).toBe(true);
    });

    test('should return true for section manager (rank 3)', () => {
      expect(isManagementPosition(POSITIONS.SECTION_MANAGER)).toBe(true);
    });

    // もし一般社員の役職を追加する場合のテスト
    test('should return false for positions with rank > 3', () => {
      const regularEmployee = {
        name: '一般社員',
        id: 4,
        rank: 4,
        allowances: 0
      };
      expect(isManagementPosition(regularEmployee)).toBe(false);
    });
  });
});
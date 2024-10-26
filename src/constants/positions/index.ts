import { Position, PositionList } from './types';

export const POSITIONS: PositionList = Object.freeze({
  PRESIDENT: {
    name: '社長',
    id: 1,
    rank: 1,
    allowances: 200000
  },
  DEPARTMENT_MANAGER: {
    name: '部長',
    id: 2,
    rank: 2,
    allowances: 100000
  },
  SECTION_MANAGER: {
    name: '課長',
    id: 3,
    rank: 3,
    allowances: 50000
  }
} as const);

export { Position, PositionList };
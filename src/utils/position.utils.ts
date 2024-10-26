import { POSITIONS, Position } from '../constants/positions';

export function getPositionByRank(rank: number): Position | undefined {
  return Object.values(POSITIONS).find(pos => pos.rank === rank);
}

export function isManagementPosition(position: Position): boolean {
  return position.rank <= 3; // 課長以上を管理職とする
}
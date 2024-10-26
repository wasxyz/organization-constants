"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionByRank = getPositionByRank;
exports.isManagementPosition = isManagementPosition;
const positions_1 = require("../constants/positions");
function getPositionByRank(rank) {
    return Object.values(positions_1.POSITIONS).find(pos => pos.rank === rank);
}
function isManagementPosition(position) {
    return position.rank <= 3; // 課長以上を管理職とする
}

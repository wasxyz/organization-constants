"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmploymentTypeById = getEmploymentTypeById;
exports.isFullTimeEmployee = isFullTimeEmployee;
exports.hasFullBenefits = hasFullBenefits;
exports.isTemporaryPosition = isTemporaryPosition;
const employment_types_1 = require("../constants/employment-types");
function getEmploymentTypeById(id) {
    return Object.values(employment_types_1.EMPLOYMENT_TYPES).find(type => type.id === id);
}
function isFullTimeEmployee(type) {
    return type.workHoursPerWeek >= 40;
}
function hasFullBenefits(type) {
    return type.benefits === true;
}
function isTemporaryPosition(type) {
    return type.contractPeriod !== undefined;
}

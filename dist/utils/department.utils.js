"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartmentById = getDepartmentById;
exports.getChildDepartments = getChildDepartments;
const departments_1 = require("../constants/departments");
function getDepartmentById(id) {
    return Object.values(departments_1.DEPARTMENTS).find(dept => dept.id === id);
}
function getChildDepartments(parentId) {
    return Object.values(departments_1.DEPARTMENTS).filter(dept => dept.parentDepartmentId === parentId);
}

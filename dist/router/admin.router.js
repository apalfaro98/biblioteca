"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
exports.router = (0, express_1.Router)();
exports.router
    .post('/login', admin_controller_1.login)
    .post('/return-book', admin_controller_1.returnBook)
    .post('/prestamo', admin_controller_1.pedirBook)
    .post('/add-book', admin_controller_1.add_book)
    .get('/show-student', admin_controller_1.showStudents)
    .get('/show-books', admin_controller_1.showBooks)
    .delete('/delete-book', admin_controller_1.deleteBook)
    .delete('/delete-student', admin_controller_1.deleteStudent);

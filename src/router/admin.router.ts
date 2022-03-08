import { Router } from "express"
import { 
    add_book, 
    deleteBook, 
    deleteStudent, 
    login, 
    pedirBook, 
    returnBook, 
    showBooks, 
    showStudents } from "../controllers/admin.controller";

export const router = Router();

router
    .post('/login', login)
    .post('/return-book', returnBook)
    .post('/prestamo', pedirBook)
    .post('/add-book', add_book)
    .get('/show-student', showStudents)
    .get('/show-books', showBooks)
    .delete('/delete-book', deleteBook)
    .delete('/delete-student', deleteStudent)
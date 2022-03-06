import { Router } from "express"
import { check } from "express-validator";
import { add_book, login, pedirBook, returnBook, showBooks, showStudents } from "../controllers/admin.controller";
import { validarCampos } from "../middlewares/validar-campos";

export const router = Router();

router
    .post('/login', login)
    .post('/return-book', returnBook)
    .post('/prestamo', pedirBook)
    .post('/add-book', add_book)
    .get('/show-student', showStudents)
    .get('/show-books', showBooks)
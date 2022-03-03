import { Router } from "express"
import { check } from "express-validator";
import { add_book, login, showBooks, showStudents } from "../controllers/admin.controller";
import { validarCampos } from "../middlewares/validar-campos";

export const router = Router();

router
    .post('/login',[
       check('usuario', 'Introducir el usuario').not().isEmpty(),
       check('password', 'Password mayor a 8 caracteres').isLength({ min: 8 }),
       validarCampos
    ], login)
    .post('/add-book', add_book)
    .get('/show-student', showStudents)
    .get('/show-books', showBooks)
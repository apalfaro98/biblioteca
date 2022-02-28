import { Router } from "express"
import { check } from "express-validator";
import { agregar, login } from "../controllers/admin.controller";
import { existeAdmin } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";

export const router = Router();

router
    .post('/agregar', agregar)
    .post('/login',[
       check('usuario', 'Introducir el usuario').not().isEmpty(),
       check('usuario').custom(existeAdmin),
       check('password', 'Password mayor a 8 caracteres').isLength({ min: 8 }),
       validarCampos
    ], login)
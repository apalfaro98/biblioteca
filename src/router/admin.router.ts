import { Router } from "express"
import { check } from "express-validator";
import { login } from "../controllers/admin.controller";
import { validarCampos } from "../middlewares/validar-campos";

export const router = Router();

router
   //  .post('/agregar', agregar)
    .post('/login',[
       check('usuario', 'Introducir el usuario').not().isEmpty(),
       check('password', 'Password mayor a 8 caracteres').isLength({ min: 8 }),
       validarCampos
    ], login)
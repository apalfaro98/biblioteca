import { Router } from 'express';
import { login } from '../controllers/student.controller';
import { validarCampos } from '../middlewares/validar-campos';
import { check } from 'express-validator';


const router = Router();


router
    .post('/login',[
        check('email', 'El correo no es valido').isEmail(),
        validarCampos
    ], login)




export { router }
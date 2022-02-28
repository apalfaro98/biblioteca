import { Router } from 'express';
import { loginStudent } from '../controllers/student.controller';


const router = Router();


router
    .post('/login', loginStudent)




export { router }
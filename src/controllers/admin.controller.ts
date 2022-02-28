import { Request, Response } from 'express';
import Admin, { Admin as AdminInterface } from '../schemas/admin.schema';



// const agregar =  async (req: Request, res: Response) => {

//     const { usuario, password } = req.body as AdminInterface;
//     // insertar admin base de datos
//     const admin = new Admin({ usuario, password });
//     await admin.save();
    
//     res.json({
//         ok: true,
//         sms: 'Admin agregado',
//         admin
//     })            

// }

const login =  async (req: Request, res: Response) => {

    const { usuario, password } = req.body as AdminInterface;
    const existeAdmin = await Admin.findOne({ usuario });
    if(!existeAdmin){
        return res.status(400).json({
            ok: false,
            sms: `No existe el admin: ${ usuario }`,
        })
    }

    if(existeAdmin.password != password){
        return res.status(400).json({
            ok: false,
            sms: 'password incorrecta'
        })
    }

    return res.json({
        ok: true,
        admin: existeAdmin
    })
}



export  { login }
import { Request, Response } from "express";

import { Student } from "../schemas/estudiante.schema";
import Estudiante from "../schemas/estudiante.schema";


const login = async (req: Request, res: Response) => {


    const {
        nombre,
        apellido,
        email,
        carrera,
        libros,
        anio,
        carnet,
    } = req.body as Student


    const estudiante = new Estudiante({
        nombre,
        apellido,
        email,
        carrera,
        libros,
        anio,
        carnet,
    });

    const existe = await Estudiante.findOne({
        $or: [
            { email },
            { carnet },
        ]
    });
    if(existe){
        return res.status(400).json({
            ok: false,
            sms: `El correo: ${ email } ya existe o carnet: ${ carnet }`,
            existe
        })
    }
    


    await estudiante.save();

    res.json({  
        ok: true,
        sms: 'Agregado correctamente',
        estudiante
        
    })

}




export {
    login
}
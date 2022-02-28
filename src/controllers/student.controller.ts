import { Request, Response } from "express";

import { Student } from "../schemas/estudiante.schema";
import Estudiante from "../schemas/estudiante.schema";


const loginStudent = async (req: Request, res: Response) => {


    const {
        nombre,
        apellido,
        email,
        carrera,
        libros,
        anio
    } = req.body as Student

    const estudiante = new Estudiante({
        nombre,
        apellido,
        email,
        carrera,
        libros,
        anio
    });
    
    await estudiante.save();

    res.json({
        ok: true,
       estudiante
        
    })

}




export {
    loginStudent
}
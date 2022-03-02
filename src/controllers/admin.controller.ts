import { Request, Response } from 'express';
import Admin, { Admin as AdminInterface } from '../schemas/admin.schema';
import Books, { Book } from '../schemas/books.schemas';


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
// Resgistro del admin
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

const add_book = async (req: Request, res: Response) => { 

    const {
        titulo,
        cantidad,
        categoria,
        autor
    } = req.body as Book;

    
    // verificar si existe
    const query = { titulo: titulo.toLowerCase() };
    const existeBook = await Books.findOne(query);
    // si existe agregarlo a la cantidad
    if(existeBook){
        const update = {
            disponible: existeBook.disponible + cantidad,
            cantidad: cantidad + existeBook.cantidad,
        };
       const bookActualizado = await Books.findOneAndUpdate(query, update);
       return res.json({
           ok: true,
           sms: 'Libro actualizado correctamente',
           bookActualizado

       })
    }
    const book = new Books({
        titulo: titulo.toLowerCase(),
        cantidad,
        disponible: cantidad,
        categoria,
        autor
    });
    // sino agregar libro nuevo
    await book.save();
    res.json({
        ok: true,
        sms: 'Libro agregado correctamente',
        book
    })


}


export  { login, add_book }
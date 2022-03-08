import { Request, Response } from 'express';
import Admin, { Admin as AdminInterface } from '../schemas/admin.schema';
import Books, { Book } from '../schemas/books.schemas';
import Estudiante from '../schemas/estudiante.schema';


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
    const query = { titulo: titulo };
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
        titulo: titulo,
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

const showStudents =  async (req: Request, res: Response) => {

    const [ total, estudiantes ] = await Promise.all([
        Estudiante.countDocuments(),
        Estudiante.find(),
    ]);
    
    res.json({
        ok: true,
        total,
        estudiantes
    })
}

const showBooks = async (req: Request, res: Response) => {

    const [ total, books ] = await Promise.all([
        Books.countDocuments(),
        Books.find(),
    ]);
    
    res.json({
        ok: true,
        total,
        books
    })

}

const pedirBook = async (req: Request, res: Response) => {

    const { titulo = '', email = '' } = req.body;

    const [book, estudiante] = await Promise.all([
        Books.findOne({ titulo }),
        Estudiante.findOne({ email })
    ])


    if( !book ) return res.status(400).json({
        ok: false,
        sms: `No existe el libro: ${ titulo }`
    });
    if( book.disponible == 0 ) return res.status(400).json({
        ok: false,
        sms: `Libro: ${ titulo } no tiene disponibles`
    })
    if( !estudiante ) return res.status(400).json({
        ok: false,
        sms: `No existe estudiante con email: ${ email }`
    });
    if(estudiante.libros.includes(titulo)) return res.status(400).json({
        ok: false,
        sms: `El estudiante: ${ estudiante.nombre }, ya tiene el libro: ${ titulo }`
    })

    estudiante.libros.push(titulo);

    await Promise.all([
        Books.findOneAndUpdate({ titulo },{ disponible: book.disponible - 1 }),
        Estudiante.findOneAndUpdate({ email }, estudiante)
    ])

    res.json({
        ok: true,
        sms: 'Prestamo realizado correctamente'
    })
}

const returnBook = async (req: Request, res: Response) => {

    const { titulo = '', email = '' } = req.body;

    const [book, estudiante] = await Promise.all([
        Books.findOne({ titulo }),
        Estudiante.findOne({ email })
    ])
    if(!book) return res.status(400).json({
        ok: false,
        sms: `No existe el libro: ${ titulo }`
    })
    if( !estudiante ) return res.status(400).json({
        ok: false,
        sms: `No existe estudiante con email: ${ email }`
    });
    if(!estudiante.libros.includes(titulo)) return res.status(400).json({
        ok: false,
        sms: `El estudiante ${ estudiante.nombre } no tiene el libro: ${ titulo }`
    })

    await Promise.all([
        Books.findOneAndUpdate({ titulo },{ disponible: book.disponible + 1 }),
        Estudiante.findOneAndUpdate({ email }, { libros: estudiante.libros.filter(b => b != titulo)})
    ])

    res.json({
        ok: true,
        sms: 'Devolucion realizado correctamente'
    })

}

const deleteBook = async (req: Request, res: Response) => {

    const { titulo , cantidad } = req.body;
    
    const book = await Books.findOne({ titulo });

    if( !book ) return res.status(400).json({
        ok: false,
        sms: `No existe el libro: ${ titulo }`
    });
    if( book.disponible < cantidad ) return res.status(400).json({
        ok: false,
        sms: 'No puedes dar baja a mas libros de los que tienes disponibles'
    });

    const query = { disponible: book.disponible - cantidad, cantidad: book.cantidad - cantidad} as Book;
    await Books.findOneAndUpdate({titulo}, query);
    res.json({
        ok: true,
        sms: `libro eliminados correctamentes`
    })

    

}

const deleteStudent = async (req: Request, res: Response) => {

    const { email } = req.body; 

    const estudiante = await Estudiante.findOne({ email });
    if(!estudiante) return res.status(400).json({
        ok: false,
        sms: `No existe estudiante con correo: ${ email }`
    })
    if(estudiante.libros.length > 0) return res.status(400).json({
        ok: false,
        sms: `El estudiante ${ estudiante.nombre } tiene aun libros prestados.`
    })
    const resp = await Estudiante.findOneAndDelete({ email });
    res.json({
        ok: true,
        sms: `estudiante eliminado correctamente`
    })

}

export  { 
    login, 
    add_book, 
    showStudents,
    showBooks,
    pedirBook,
    returnBook,
    deleteBook,
    deleteStudent
}
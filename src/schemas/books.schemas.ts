import { Schema, model } from 'mongoose';


export interface Book{

    titulo: string;
    categoria: string;
    cantidad: number;
    disponible: number;
    autor: string;
    

}


const booksSchema = new Schema<Book>({
    
    titulo: {
        type: String,
        required: [true, 'El titulo es requerido']
    },
    categoria: {
        type: String,
        required: [true, 'La categoria es obligoria'],
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es requerida']
    },
    disponible: {
        type: Number,
    },
    autor: {
        type: String,
        required: [true, 'El autor es obligatorio']
    }

})

export default model<Book>('libros', booksSchema);
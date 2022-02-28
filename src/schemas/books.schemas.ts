import { Schema, model } from 'mongoose';


interface Book{

    titulo: string;
    categoria: string;
    cantidad: number;
    

}


const booksSchema = new Schema<Book>({
    
    titulo: String,
    categoria: String,
    cantidad: Number,

})

export default model<Book>('libros',booksSchema);
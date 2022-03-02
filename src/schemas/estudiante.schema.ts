import { Schema, model } from 'mongoose';


export interface Student{

    nombre: string;
    apellido: string;
    carrera: string;
    libros: string[];
    anio: string;
    email: string;
    carnet: string;
    

}


const studentSchema = new Schema<Student>({
    
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    carnet: {
        type: String,
        required: [true, 'El carnet es obligatorio'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    carrera: {
        type: String,
        required: true,
    },
    libros: {
        type: [],
        default: []
    },
    anio: {
        type: String,
        required: true,
    }


})

export default model<Student>('Estudiante',studentSchema);
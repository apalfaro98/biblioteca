import { Schema, model } from 'mongoose';


export interface Student{

    nombre: string;
    apellido: string;
    carrera: string;
    libros: number;
    anio: number;
    email: string;
    

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
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    carrera: {
        type: String,
        required: true,
        enum: ['Matematica', 'Fisica', 'Cibernetica']
    },
    libros: {
        type: Number,
        default: 1
    },
    anio: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    }


})

export default model<Student>('Estudiante',studentSchema);
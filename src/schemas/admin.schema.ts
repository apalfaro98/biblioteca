import { Schema, model } from 'mongoose';


export interface Admin{

    usuario: string;
    password: string;
    

}


const adminsSchema = new Schema<Admin>({
    
    usuario: {
        type: String,
        unique: true,
        required: [true, 'El usuario es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    }

})

export default model<Admin>('Admin',adminsSchema);
import Admin  from '../schemas/admin.schema';


const existeAdmin = async (usuario: string) => {

    const existeAdmin = await Admin.findOne({ usuario });
    if(!existeAdmin){
        throw new Error(`El usuario ${ usuario } no existe`);
    }
    
}

export {
    existeAdmin,
}
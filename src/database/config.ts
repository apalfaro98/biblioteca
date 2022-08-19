import mongoose from "mongoose"



const dbConnection = async() => {

   try {
       
        await mongoose.connect(process.env.MONGO!);
        console.log('Base de datos online');
        
   } catch (error) {
       throw new Error('Erro en al conectar db');
       
   } 

}



export {
    dbConnection
}
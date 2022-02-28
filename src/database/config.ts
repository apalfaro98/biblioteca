import mongoose from "mongoose"



const dbConnection = async() => {

   try {
       
        await mongoose.connect('mongodb://localhost:27017/biblioteca');
        console.log('Base de datos offline');
        
   } catch (error) {
       throw new Error('Erro en al conectar db');
       
   } 

}



export {
    dbConnection
}
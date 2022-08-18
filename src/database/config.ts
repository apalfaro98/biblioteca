import mongoose from "mongoose"



const dbConnection = async() => {

   try {
       
        await mongoose.connect('mongodb+srv://apalfaro98:Ampa*980302@cluster0.fm9hqy3.mongodb.net/test');
        console.log('Base de datos offline');
        
   } catch (error) {
       throw new Error('Erro en al conectar db');
       
   } 

}



export {
    dbConnection
}
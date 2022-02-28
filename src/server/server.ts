import cors from "cors";
import express, { Application } from "express";
import path from 'path';
import { dbConnection } from "../database/config";

import { router as routerAdmin } from "../router/admin.router";
import { router as routerStudent } from "../router/students.router";

export default class Server {

    app: Application;
    port: number;

    constructor(port: number) {
        
        this.app = express();
        this.port = port;
        // conectar db
        this.dataBaseConect();
        // middlewares
        this.middlewares();
        // rutas de la aplicacion
        this.routes();
    }

    private middlewares(){

        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static(
            path.resolve(__dirname,'../public')
        ));

    }

    private async dataBaseConect(){

        await dbConnection();

    }

    private routes(){
        this.app.use('/api/admin', routerAdmin);
        this.app.use('/api/student', routerStudent);
    }
    public startServer(){

        this.app.listen(this.port, () => {

            console.log('Escuchando puerto',this.port);

        })

    }

}
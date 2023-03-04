const express = require('express');
import cors from 'cors'
import {Application} from 'express';
import sponsors from '../routes/sponsor';
import admins from '../routes/admin';
import childs from '../routes/child';
import auth from '../routes/auth';
import { dbConnection } from '../db/connection';

// const { dbConnection } = require('../database/config');

class Server {
    private app:Application;
    private port:string;
    private paths = {
        sponsor:   '/api/sponsors',
        admin:     "/api/admin",
        child:     "/api/childs",
        auth:      "/api/auth"

    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080";

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        try {
           await dbConnection.authenticate();
           console.log("Connection has been established succesfully");

        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

        // Fileupload - Carga de archivos
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));

    }

    routes() {
        
      
        this.app.use( this.paths.sponsor, sponsors);
        this.app.use( this.paths.admin, admins);
        this.app.use( this.paths.child, childs);
        this.app.use( this.paths.auth, auth);
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}



export default Server;
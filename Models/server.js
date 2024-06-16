import express from 'express'
import db from "../Config/connection.js"
import { initializeModels } from './initialization.js'
import routerApi from '../Routes/index.js';
import initAssociations from './associations.js';

class Server {

    constructor() {
        this.port = 3000;
        this.app = express();
        this.dbConnection();
        this.routes();
        this.middlewares();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            initializeModels();
            initAssociations();
            await db.sync({ alter: true });
            console.log('running');
        } catch (error) {
            throw (error);
        }
    }

    middlewares(){
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(this.port, () => console.log(`listenning on port ${this.port}`));
    }

    routes() {
        routerApi(this.app);
    }

}

export default Server




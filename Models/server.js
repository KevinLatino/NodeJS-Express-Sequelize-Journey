import express from 'express'
import db from "../Config/sequelize.js"
import { initializeModels } from './initialization.js'


class Server {

    constructor() {
        this.port = 3000;
        this.app = express();
        this.dbConnection();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            initializeModels();
            await db.sync({ force: true });
            console.log('running');
        } catch (error) {
            throw (error);
        }
    }

    listen() {
        this.app.listen(this.port, () => console.log(`listenning on port ${this.port}`));
    }
}

export default Server




import express from 'express';
import routerApi from './Routes/index.js';
import cors from 'cors';
import initializeModels from './Models/initialization.js';
import initAssociations from './Models/associations.js';
import db from './Config/connection.js';

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => console.log(`running on port ${port}`));

const dbConnection = async () => {
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

dbConnection();

routerApi(app);




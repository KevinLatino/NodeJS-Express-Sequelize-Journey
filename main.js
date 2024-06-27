import express from 'express';
import routerApi from './Routes/index.js';
import cors from 'cors';
import initializeModels from './Models/initialization.js';
import initializeAssociations from './Models/associations.js';
import db from './Config/connection.js';

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

const initializeDatabase = async () => {
    try {
        await db.authenticate();
        initializeModels();
        initializeAssociations();
        await db.sync({ alter: true });
        console.log(`running on port ${port}`);
    } catch (error) {
        throw (error);
    }
}

app.listen(port, () => console.log(`running on port ${port}`));

routerApi(app);

initializeDatabase();




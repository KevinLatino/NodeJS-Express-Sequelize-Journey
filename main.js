import express from 'express';
import routerApi from './Routes/index.js';
import cors from 'cors';
import initializeModels from './Models/initialization.js';
import initializeAssociations from './Models/associations.js';
import db from './Config/connection.js';
import { singToken } from './token.sing.js';
import initStrategies from './Auth/initStrategies.js';
import { verifyToken } from './token.verify.js';

const app = express();
const port = 3000;

const secret = "myCat"

const payload = {
    sub: 1
}

const JWToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTcyMDAyMjI0OH0.ShtDE8XwyX_t5Fu5luav-1sa2dhat2w8MfjRhlj67uY"

const payload2 = verifyToken(JWToken, secret);

const token = singToken(payload, secret)

app.use(express.json());
app.use(cors());

const initializeDatabase = async () => {
    try {
        await db.authenticate();
        initializeModels();
        initializeAssociations();
        initStrategies();
        console.log(token);
        console.log(payload2);
        await db.sync({ alter: true });
        console.log(`running on port ${port}`);
    } catch (error) {
        throw (error);
    }
}

app.listen(port, () => console.log(`running on port ${port}`));

routerApi(app);

initializeDatabase();




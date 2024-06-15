import { Sequelize } from "sequelize";

const db = new Sequelize("postgresql://neondb_owner:gmXUn1IGW6YZ@ep-tiny-sun-a55blr96.us-east-2.aws.neon.tech/neondb?sslmode=require", {
    dialect: "postgres",
    logging: true
})

export default db;
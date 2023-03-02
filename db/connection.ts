import { Sequelize } from "sequelize";

export const dbConnection = new Sequelize('pruebasDB', 'jesus', '123456', {
    host: 'localhost',
    dialect:"mysql",
    port: 3306,
    logging: false,
  });



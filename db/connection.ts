import { Sequelize } from "sequelize";
import {config} from 'dotenv'
config();
const MYSQL_DB:string | undefined = process.env.MYSQL_DB;
const MYSQL_USER:string | undefined = process.env.MYSQL_USER;
const MYSQL_PASSWORD:string | undefined = process.env.MYSQL_PASSWORD;
const MYSQL_HOST:string | undefined = process.env.MYSQL_HOST;
const MYSQL_PORT:string | undefined = process.env.MYSQL_PORT;
export const dbConnection = new Sequelize(MYSQL_DB!, MYSQL_USER!, MYSQL_PASSWORD!, {
    host: MYSQL_HOST!,
    dialect:"mysql",
    port: Number(MYSQL_PORT!),
    logging: false,
  });



import { dbConnection } from '../db/connection';
import {DataTypes} from 'sequelize'

export const Sponsor = dbConnection.define("sponsors",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true

    },
    password: {
        type: DataTypes.STRING,
        defaultValue: false
    }

    

});
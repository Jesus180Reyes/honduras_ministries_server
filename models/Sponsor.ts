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
        allowNull: true,
        defaultValue: "NO ASSIGNED"

    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    

});

Sponsor.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
   
    values.uid = values.id
    delete values.password;
    delete values.id;
    return values;
  }

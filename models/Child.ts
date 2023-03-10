import { dbConnection } from "../db/connection";
import { DataTypes } from 'sequelize';

export const Child = dbConnection.define("childs",{
    name: {
        type: DataTypes.STRING,
        allowNull:false,

    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    community: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imgSrc: {
        type: DataTypes.STRING,
        defaultValue: "https://res.cloudinary.com/dxzafq3oh/image/upload/v1662406100/user_qwgkj9.png"
    }
    
});

Child.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    const years = Math.floor(values.createdAt.getFullYear() - values.birthday.getFullYear()) 
    values.currentAge = years;
    values.uid = values.id
    delete values.id;
    return values;
  }
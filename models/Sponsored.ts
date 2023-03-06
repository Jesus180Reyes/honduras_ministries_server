import { DataTypes } from "sequelize";
import { dbConnection } from "../db/connection";

export const Sponsored = dbConnection.define("sponsoreds",{
  child: {
    type: DataTypes.JSON,
    allowNull: false,

  },
  sponsor: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.JSON,
    allowNull: false
  }

    

});

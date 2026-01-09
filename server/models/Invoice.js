const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Invoice = sequelize.define(
  "Invoice",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    invoiceNumber: {
      type: DataTypes.STRING,
      unique: true,
    },

    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    tax: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    discount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    },

    paymentMethod: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: "PAID",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Invoice;

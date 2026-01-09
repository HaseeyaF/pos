const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    sku: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    barcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    cost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
    },

    imageUrl: {
      type: DataTypes.STRING,
    },

    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    lowStockThreshold: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,

    hooks: {
      beforeCreate(product) {
        if (product.sku) {
          product.sku = product.sku.toUpperCase();
        }
      },
      beforeUpdate(product) {
        if (product.sku) {
          product.sku = product.sku.toUpperCase();
        }
      },
    },
  }
);

// Virtual profit margin
Product.prototype.getProfitMargin = function () {
  if (!this.cost || this.cost === 0) return 0;
  return ((this.price - this.cost) / this.price) * 100;
};

module.exports = Product;

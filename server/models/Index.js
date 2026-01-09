const Product = require("./Product");
const Customer = require("./Customer");
const User = require("./User");
const Invoice = require("./Invoice");
const InvoiceItem = require("./InvoiceItem");

Customer.hasMany(Invoice);
Invoice.belongsTo(Customer);

Invoice.hasMany(InvoiceItem);
InvoiceItem.belongsTo(Invoice);

Product.hasMany(InvoiceItem);
InvoiceItem.belongsTo(Product);

module.exports = {
  Product,
  Customer,
  User,
  Invoice,
  InvoiceItem,
};

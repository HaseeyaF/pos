const express = require("express");
const cors = require("cors");

const app = express();

const productRoutes = require("./routes/product.routes");
const customerRoutes = require("./routes/customer.routes");
const userRoutes = require("./routes/user.routes");
const invoiceRoutes = require("./routes/invoice.routes");

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/invoices", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("POS API running");
});

module.exports = app;

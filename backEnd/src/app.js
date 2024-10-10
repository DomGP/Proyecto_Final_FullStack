const express = require("express");
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes")
const ordersRoutes = require("./routes/orders.routes")
const app = express();

app.use(express.json());

app.use("/api", usersRoutes);

app.use("/api", productsRoutes)

app.use("api", ordersRoutes)

module.exports = app;

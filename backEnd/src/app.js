const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes")
const app = express();

app.use(express.json());

app.use("/api", usersRoutes);

app.use("/api", productsRoutes)

module.exports = app;

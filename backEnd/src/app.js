const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const app = express();

app.use(express.json());

app.use("/api", usersRoutes);

module.exports = app;

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");
const ordersRoutes = require("./routes/orders.routes");
const postsRoutes = require("./routes/posts.routes")
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", usersRoutes);

app.use("/api", productsRoutes);

app.use("/api", ordersRoutes);

app.use("/api", postsRoutes)

module.exports = app;

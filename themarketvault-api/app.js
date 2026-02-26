const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");
const coinRoutes = require("./routes/coinRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/coins", coinRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

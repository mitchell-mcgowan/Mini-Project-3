const swaggerJsDoc = require("swagger_jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MarketVault API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsDoc(options);

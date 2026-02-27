const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MarketVault API",
      version: "1.0.0",
      description: "API documentation for MarketVault crypto backend",
    },
    components: {
      schemas: {
        Coin: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              example: "67c0a1b2f9d3e4a56789abcd",
            },
            apiId: {
              type: "string",
              example: "bitcoin",
            },
            name: {
              type: "string",
              example: "Bitcoin",
            },
            symbol: {
              type: "string",
              example: "btc",
            },
            currentPrice: {
              type: "number",
              example: 45000,
            },
            marketCap: {
              type: "number",
              example: 900000000000,
            },
            totalVolume: {
              type: "number",
              example: 35000000000,
            },
            priceChange24h: {
              type: "number",
              example: -2.5,
            },
            lastUpdated: {
              type: "string",
              example: "2025-02-26T18:00:00.000Z",
            },
          },
        },
        CreateCoinInput: {
          type: "object",
          required: ["apiId", "name", "symbol", "currentPrice"],
          properties: {
            apiId: { type: "string", example: "custom-coin" },
            name: { type: "string", example: "Custom Coin" },
            symbol: { type: "string", example: "cstm" },
            currentPrice: { type: "number", example: 1.23 },
          },
        },
        UpdateCoinInput: {
          type: "object",
          properties: {
            currentPrice: { type: "number", example: 999.99 },
            marketCap: { type: "number", example: 123456789 },
            totalVolume: { type: "number", example: 987654321 },
          },
        },
        DeleteResponse: {
          type: "object",
          properties: {
            message: { type: "string", example: "Coin deleted" },
          },
        },
        RefreshResponse: {
          type: "object",
          properties: {
            message: { type: "string", example: "Coins refreshed from API" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsDoc(options);

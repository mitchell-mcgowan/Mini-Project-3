const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema(
  {
    apiId: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    marketCap: { type: Number },
    totalVolume: { type: Number },
    priceChange24h: { type: Number },
    lastUpdated: { type: Date },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Coin", coinSchema);

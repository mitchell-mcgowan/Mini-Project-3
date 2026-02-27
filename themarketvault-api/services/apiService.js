const axios = require("axios");
const Coin = require("../models/coinModel");

const fetchAndStoreCoins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 50,
          page: 1,
          sparkline: false,
        },
      },
    );

    const coins = response.data;

    for (const coin of coins) {
      await Coin.findOneAndUpdate(
        { apiId: coin.id },
        {
          apiId: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          currentPrice: coin.current_price,
          marketCap: coin.market_cap,
          totalVolume: coin.total_volume,
          priceChange24h: coin.price_change_24h,
          lastUpdated: coin.last_updated,
        },
        { upsert: true, new: true },
      );
    }

    console.log("Coins fetched and stored successfully");
  } catch (error) {
    console.error("Error fetching coins:", error.message);
  }
};

module.exports = fetchAndStoreCoins;

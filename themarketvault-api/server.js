require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const fetchAndStoreCoins = require("./services/apiService");

connectDB().then(() => {
  fetchAndStoreCoins(); //Startup routine

  app.listen(process.env.PORT, () =>
    console.log("Server running on port ${process.env.PORT}"),
  );
});

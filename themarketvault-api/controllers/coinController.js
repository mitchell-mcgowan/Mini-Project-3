const coin = require("../models/coinModel");
const fetchAndStroeCoins = require("../services/apiService");

exports.getAllCoins = async (req, res) => {
  const coins = await Coin.find();
  res.json(coins);
};

exports.getCoinById = async (req, res) => {
  const coin = await Coin.findById(req.params.id);
  if (!coin) return res.status(404).json({ message: "Coin not found" });
  res.json(coin);
};

exports.createCoin = async (req, res) => {
  const coin = new Coin(req.body);
  await coin.save();
  res.status(201).json(coin);
};

exports.updateCoin = async (req, res) => {
  const coin = await Coin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(coin);
};

exports.deleteCoin = async (req, res) => {
  await Coin.findByIdAndDelete(req.params.id);
  res.json({ message: "Coin deleted" });
};

exports.refreshCoins = async (req, res) => {
  await fetchAndStoreCoins();
  res.json({ message: "Coins refreshed from API" });
};

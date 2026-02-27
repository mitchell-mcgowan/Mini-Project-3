const Coin = require("../models/coinModel");
const fetchAndStoreCoins = require("../services/apiService");

exports.getAllCoins = async (req, res) => {
  try {
    const coins = await Coin.find();
    res.json(coins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCoinById = async (req, res) => {
  try {
    const coin = await Coin.findById(req.params.id);
    if (!coin) return res.status(404).json({ message: "Coin not found" });
    res.json(coin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCoin = async (req, res) => {
  try {
    const coin = new Coin(req.body);
    await coin.save();
    res.status(201).json(coin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCoin = async (req, res) => {
  try {
    const coin = await Coin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(coin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCoin = async (req, res) => {
  try {
    await Coin.findByIdAndDelete(req.params.id);
    res.json({ message: "Coin deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.refreshCoins = async (req, res) => {
  try {
    await fetchAndStoreCoins();
    res.json({ message: "Coins refreshed from API" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

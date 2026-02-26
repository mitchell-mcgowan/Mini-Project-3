const express = require("express");
const router = express.Router();
const controller = require("../controllers/coinController");

router.get("/", controller.getAllCoins);
router.get("/:id", controller.getCoinById);
router.post("/", controller.createCoin);
router.put("/:id", controller.deleteCoin);
router.post("/refresh/data", controller.refreshCoins);

module.exports = router;

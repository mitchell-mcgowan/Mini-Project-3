const express = require("express");
const router = express.Router();
const controller = require("../controllers/coinController");

/**
 * @swagger
 * tags:
 *   name: Coins
 *   description: Cryptocurrency management
 */

/**
 * @swagger
 * /api/coins:
 *   get:
 *     summary: Get all coins
 *     tags: [Coins]
 *     responses:
 *       200:
 *         description: List of all coins
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Coin'
 */
router.get("/", controller.getAllCoins);

/**
 * @swagger
 * /api/coins/{id}:
 *   get:
 *     summary: Get a coin by ID
 *     tags: [Coins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "67c0a1b2f9d3e4a56789abcd"
 *     responses:
 *       200:
 *         description: Coin found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coin'
 *       404:
 *         description: Coin not found
 */
router.get("/:id", controller.getCoinById);

/**
 * @swagger
 * /api/coins:
 *   post:
 *     summary: Create a new coin
 *     tags: [Coins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCoinInput'
 *     responses:
 *       201:
 *         description: Coin created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coin'
 */
router.post("/", controller.createCoin);

/**
 * @swagger
 * /api/coins/{id}:
 *   put:
 *     summary: Update a coin
 *     tags: [Coins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "67c0a1b2f9d3e4a56789abcd"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateCoinInput'
 *     responses:
 *       200:
 *         description: Coin updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coin'
 */
router.put("/:id", controller.updateCoin);

/**
 * @swagger
 * /api/coins/{id}:
 *   delete:
 *     summary: Delete a coin
 *     tags: [Coins]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "67c0a1b2f9d3e4a56789abcd"
 *     responses:
 *       200:
 *         description: Coin deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeleteResponse'
 */
router.delete("/:id", controller.deleteCoin);

/**
 * @swagger
 * /api/coins/refresh/data:
 *   post:
 *     summary: Refresh live data from CoinGecko
 *     tags: [Coins]
 *     responses:
 *       200:
 *         description: Data refreshed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RefreshResponse'
 */
router.post("/refresh/data", controller.refreshCoins);

module.exports = router;

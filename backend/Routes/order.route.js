const express = require("express");
const OrderRouter = express.Router();
const { OrderModel } = require("../Model/orderHistory.model");

OrderRouter.post("/add", async (req, res) => {
  try {
    const orders = req.body.map((order) => {
      return {
        image: order.image,
        name: order.name,
        price: order.price,
        category: order.category,
        quantity: order.quantity,
        date: order.date,
        userId: req.body.userId, // add userId from middleware
        userName: req.body.userName, // add userName from middleware
      };
    });
    const createdOrders = await OrderModel.insertMany(orders);
    res.status(201).send(createdOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

OrderRouter.get("/", async (req, res) => {
  try {
    const userId = req.body.userId;

    const products = await OrderModel.find({
      userId,
    }); // Retrieve products that match user ID
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = { OrderRouter };

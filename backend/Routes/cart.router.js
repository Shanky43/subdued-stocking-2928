const express = require("express");
const CartRouter = express.Router();
const { CartModel } = require("../Model/cart.model");

CartRouter.post("/add", async (req, res) => {
  try {
    const { image, name, price, quantity, category, userId, userName } =
      req.body;
    const product = new CartModel({
      image,
      name,
      price,
      category,
      quantity,
      userId,
      userName,
    });
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Delete a product from cart
CartRouter.delete("/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await CartModel.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send("deletedProduct");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// ""delete all the product after purchase from the cart""
CartRouter.post("/delete/all", async (req, res) => {
  try {
    const { userId } = req.body;
    const deletedProducts = await CartModel.deleteMany({ userId });
    if (!deletedProducts.deletedCount) {
      return res.status(404).send("No products found for user");
    }
    res.status(200).send(`Deleted ${deletedProducts.deletedCount} products`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Get all products in cart
CartRouter.get("/", async (req, res) => {
  try {
    const userId = req.body.userId; // Retrieve user ID from request object

    // console.log(req.body);
    // By the help of middleware i always get the userId and userName from req.body

    const products = await CartModel.find({
      userId,
    }); // Retrieve products that match user ID
    res.status(200).send(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

CartRouter.patch("/increase", async (req, res) => {
  try {
    const { id, quantity } = req.body;

    if (!id || !quantity) {
      return res.status(400).send("Missing required fields");
    }

    const product = await CartModel.findOne({ _id: id });
    if (!product) {
      return res.status(404).send("Product not found");
    }

    product.quantity = quantity;
    await product.save();

    res.status(200).send(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = { CartRouter };

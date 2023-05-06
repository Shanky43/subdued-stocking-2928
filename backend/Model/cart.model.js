const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = { CartModel };

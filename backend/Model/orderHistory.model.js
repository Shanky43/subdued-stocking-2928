const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };

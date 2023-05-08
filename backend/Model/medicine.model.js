const mongoose = require("mongoose");

const medSchema = mongoose.Schema(
  {
    image: { type: String },
    discount: { type: String },
    name: { type: String },
    subcat2: { type: String },
    subcategory: { type: String },
    brand: { type: String },
    price: { type: Number },
    mainprice: { type: String },
    category: { type: String },
    "price-box": { type: String },
  },
  {
    versionKey: false,
  }
);
const MedModel = mongoose.model("products", medSchema);

module.exports = MedModel;

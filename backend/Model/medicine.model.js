const mongoose = require("mongoose");

const medSchema = mongoose.Schema(
    {
        image: { type: String, required: true },
        discount: { type: String, required: true },
        name: { type: String, required: true },
        subcat2: { type: String, required: true },
        subcategory: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        mainprice: { type: String, required: true },
        category: { type: String, required: true },
        "price-box": { type: String, required: true }
    },
    {
        versionKey: false,
    }
);
const MedModel = mongoose.model("products", medSchema);

module.exports = MedModel;
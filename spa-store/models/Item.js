const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    sizes: {type: Array, require: false},
    price: { type: Number, default: 9.99},
    quantity: {type: Array, require: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

//NEEDS VALIDATORS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    sizes: {type: JSON, required: false},
    price: { type: Number, default: 9.99},
    quantity: {type: Number, required: true},
    gender: {type: String, required: false},
    image: {type: String, required: true},
    type: {type: String, required: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

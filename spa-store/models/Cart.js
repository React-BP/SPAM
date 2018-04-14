const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    cart: { type: Array, required: true}
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
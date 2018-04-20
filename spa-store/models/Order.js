//NEEDS VALIDATORS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
   user: {type: String, required: true},
   items: {type: Array, required: true},
   totalPrice: {type: Number, required: true},
   paid: {type: Boolean, required: true, default: false}
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
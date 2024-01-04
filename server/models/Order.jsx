const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    Address: String,
    city: String,
    zip: Number,
    state: String,
    country: String,
    SpecialInstruction: String,
    Payment: { type: String, default: "Cash On Delivery", },
    status: { type: String, default: "Pending", },
    dateOrder: { type: Date, default: Date.now, },
},
    { timestamps: { updatedAt: "updated", createdAt: "created", } }
);

const OrderModel = mongoose.model("Orders", OrderSchema);
module.exports = OrderModel;

const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  username: String,
  user_email: String,
  user_route: String,
  price: Number,
});

module.exports = mongoose.model("tickets", ticketSchema);

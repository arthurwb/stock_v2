const mongoose = require("mongoose");

const {Schema} = mongoose;
const optionSchema = new Schema({
  name: String,
  price: Number,
  historicalPrices: [Number]
});
module.exports = mongoose.model('Options',optionSchema);
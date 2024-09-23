const mongoose = require("mongoose");

const {Schema} = mongoose;
const userSchema = new Schema({
  username: String,
  password: String,
  carrots: Map,
  wallet: Number
});
module.exports = mongoose.model('Users',userSchema);
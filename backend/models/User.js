const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  image:String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);

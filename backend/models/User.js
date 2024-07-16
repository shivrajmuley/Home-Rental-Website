const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
     required: true,
   
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [{ type: String }],
});
const User = mongoose.model("User", UserSchema);
module.exports = User;

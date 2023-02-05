const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is Required"],
    trim: true,
    maxLength: [25, "Name must be in 25 Character Long"],
  },
  email: {
    type: String,
    require: [true, "Email is Required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);

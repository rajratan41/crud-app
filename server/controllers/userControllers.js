// Logic
const User = require("../models/userModel");

// home route
exports.home = (req, res) => {
  res.send("Hello Alpha");
};

// createUser route
exports.createUser = async (req, res) => {
  try {
    // grabbing name and email
    const { name, email } = req.body;

    // To check all the details

    // checking name and email are entered or not
    if (!name || !email) {
      throw new Error("Name and Email Required");
    }

    // checking user already exist or not
    const userExist = await User.findOne({ email });

    if (userExist) {
      throw new Error("Email already Exists");
    }

    // Inserting into Database
    const user = await User.create({ name, email });
    res.status(200).json({
      success: true,
      message: "User Created Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// getUsers route
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// editUser route
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User Updated Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// deleteUser route
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

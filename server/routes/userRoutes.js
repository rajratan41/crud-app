// Url Path

const express = require("express");
const {
  home,
  createUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/userControllers");
const router = express.Router();

// home route
router.get("/", home);

// createUser route
router.post("/createUser", createUser);

// getUser route
router.get("/getUsers", getUsers);

// editUser route
router.put("/editUser/:id", editUser);

// deleteUser route
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;

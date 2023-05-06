const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { userModel } = require("../Model/user.model");
const bcrypt = require("bcrypt");

//register the user
userRouter.post("/register", async (req, res) => {
  try {
    const { email, password, name, age, username } = req.body;

    // check if user with the email already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    bcrypt.hash(password, 5, async (err, hash) => {
      // Store hash in your password DB.
      // create a new user
      const user = new userModel({
        email,
        password: hash,
        name,
        age,
        username,
      });
      await user.save();

      // return success message
      res.status(201).json({ message: "User created successfully" });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//login users
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { authorId: user.id, author: user.name },
            "shhhhh"
          );
          res.status(200).json({ message: "Login Sucessful", token });
        } else {
          res.status(401).json({ message: "Wrong Credentials" });
        }
      });
    } else {
      res.status(401).json({ message: "Wrong Credentials" });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//get all the users
userRouter.get("/", async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = { userRouter };

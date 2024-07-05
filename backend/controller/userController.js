const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const signup = async (req, res) => {
  const { email, password, firstName, lastName, image } = req.body;



  try {
    // Existing user check
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exist..." });
    }

    //hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    //userCreation
    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
      password: hashedPassword,
    });

    //Create Token
    const token = await jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      process.env.JWT_KEY
    );
    res.status(200).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

//LOGIN

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "User Not  Found..." });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(400).json({ message: "Wrong Password ..." });
    }
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = { signup, login };

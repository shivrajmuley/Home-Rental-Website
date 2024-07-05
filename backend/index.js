const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { signup, login } = require("./controller/userController");
const listing = require("./controller/homeListingController");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",

  filename: (req, file, cb) => {
    return cb(null, file.fieldname + "_" + Date.now() + ".jpg");
  },
});
const upload = multer({ storage: storage }).array("file", 6);
const uploadProfile = multer({ storage: storage });

const app = express();
const path = require("path");
const User = require("./models/User");
const { compare } = require("bcrypt");
const HomeListing = require("./models/HomeListing");

//middleware
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("Connected To Database");
    app.listen(8800, () => {
      console.log("Server is Running");
    });
  })
  .catch((err) => console.log("Can't Connected to Database ERROR!"));

app.use("/uploads", express.static(`uploads`));
app.post("/uploadProfile", uploadProfile.single("file"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:8800/uploads/${req.file.filename}`,
  });
});
app.post("/upload", upload, (req, res) => {
  let trail = [];
  for (let i = 0; i < req.files.length; i++) {
    trail.push(`http://localhost:8800/uploads/${req.files[i].filename}`);
  }
  res.json({
    image_url: trail,
  });
});

//signup ROutes
app.post("/signup", signup);

//Login
app.post("/login", login);

//HomeListing
app.post("/homeListing", listing);

// get all data properties
app.get("/properties/:id", async (req, res) => {
  try {
    const getProperties = await HomeListing.findById(req.params.id);
    res.status(200).json(getProperties);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.get("/properties", async (req, res) => {
  try {
    const getProperties = await HomeListing.find();
    res.status(200).json(getProperties);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.get("/findEmail/:email", async (req, res) => {
  try {
    const getProperties = await User.findOne(req.params);
    res.status(200).json(getProperties);
  } catch (error) {
    res.status(500).json(error);
  }
});

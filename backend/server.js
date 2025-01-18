import express from "express";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import verifyJWT from "./middleware/verifyJWT.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 5000;

app.post("/api/register", async (req, res) => {
  const user = req.body;
  if (!user?.username || !user?.password || !user?.role) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  const hashPassword = await bcrypt.hash(user?.password, 10);
  console.log(hashPassword);
  user.password = hashPassword;
  try {
    const newUser = new User(user);
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = req.body;
  if (!user?.username || !user?.password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  try {
    const data = await User.findOne({ username: user?.username });
    if (!data) {
      return res
        .status(400)
        .json({ success: false, message: "User not available" });
    }

    const match = await bcrypt.compare(user?.password, data?.password);

    if (match) {
      const accessToken = jwt.sign(
        {
          username: data?.username,
          role: data?.role,
        },
        "SECRETKEY",
        {
          expiresIn: "15m",
        }
      );
      return res.status(200).json({
        success: true,
        message: "Logged In",
        accessToken,
        role: data?.role,
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/api/products", verifyJWT, async (req, res) => {
  const product = req.body;
  if (!product?.name || !product?.price || !product?.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }
  try {
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.get("/api/products", verifyJWT, async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.put("/api/products", async (req, res) => {
  const { id } = req?.query;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products", async (req, res) => {
  const { id } = req?.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Product Id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:5000", PORT);
});

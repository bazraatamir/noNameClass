const dotenv = require("dotenv");
const mongoose = require("mongoose");
const colors = require("colors");
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    console.log(
      `data maan holbogdloo haan be mongoodb ${mongoose.connection.host}`
        .bgMagenta.white
    );
  } catch (error) {
    console.log(`mongo holbogdosonguie ${error}`.bgRed.white);
  }
};

module.exports = connectDB;

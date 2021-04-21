const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const uri = process.env.MONGODB_URI;

require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://NicSantiago:lessgo@cluster0.z11sm.mongodb.net/sample_members?retryWrites=true&w=majority", {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

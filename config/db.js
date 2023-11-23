const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb`);
  } catch (error) {
    console.log(`MONGO Connect Error ${error}`);
  }
};

module.exports = connectDB;

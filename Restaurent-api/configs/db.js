const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const username = process.env.DB_GROCERY_USERNAME;
const password = process.env.DB_GROCERY_PASSWORD;

mongoose.set("strictQuery", true);

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/Restaurent");
 
};

module.exports = connection;

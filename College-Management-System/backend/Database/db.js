require("dotenv").config();
const mongoose = require("mongoose");

// Try both MONGO_URI and MONGODB_URI
const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI;

const connectToMongo = async () => {
  try {
    if (!mongoURI) {
      throw new Error("Neither MONGO_URI nor MONGODB_URI found in environment variables");
    }

    console.log('Connecting to MongoDB with URI:', mongoURI);
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
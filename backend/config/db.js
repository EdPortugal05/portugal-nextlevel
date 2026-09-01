import mongoose from "mongoose";

// Connects to MongoDB using the connection string in .env
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Stop the server if the database connection fails
  }
};

export default connectDB;

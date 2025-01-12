import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://hariharan19986:LtDgK3wAJC1oxRpk@cluster0.wvjlz.mongodb.net/products_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected: ${conn?.connection?.host}`);
  } catch (error) {
    console.log(`Error : ${error?.message}`);
    process.exit(1);
  }
};

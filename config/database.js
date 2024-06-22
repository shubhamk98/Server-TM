import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.MDB_URL)
    .then(() => console.log("DB connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Error");
      console.error(error);
      process.exit(1);
    });
};
export default connectDB;

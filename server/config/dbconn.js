import mongoose from "mongoose";

const DbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maryamhafeez9826_db_user:0olyj2htKd5FdNCz@shopcluster.qhbppb0.mongodb.net/?appName=ShopCluster",
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

export default DbConnect;

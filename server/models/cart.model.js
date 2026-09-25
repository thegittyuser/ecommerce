import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
});
const cartModel = mongoose.model("cartModel", cartSchema);

export default cartModel;

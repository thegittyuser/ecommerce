import productsData from "../products/productsApi.json" with { type: "json" };
import cartModel from "../models/cart.model.js";

export const products = (req, res) => {
  res.json(productsData.products);
};

export const cart = async (req, res) => {
  try {
    const { id, title, image, price } = req.body;
    await cartModel.create({
      id,
      title,
      image,
      price,
    });
    return res
      .status(201)
      .json({ ok: true, message: "Product added to cart." });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ ok: true, message: "Internal Server Error." });
  }
};

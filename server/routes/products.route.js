import express from "express";
import {
  cart,
  products,
  fetchCart,
} from "../controllers/products.controller.js";
const productsRouter = express.Router();

productsRouter.get("/products", products);
productsRouter.post("/cart", cart);
productsRouter.get("/fetchcart", fetchCart);

export default productsRouter;

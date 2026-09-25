import express from "express";
import { cart, products } from "../controllers/products.controller.js";
const productsRouter = express.Router();

productsRouter.get("/products", products);
productsRouter.post("/cart", cart);

export default productsRouter;

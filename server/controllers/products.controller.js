import productsData from "../products/productsApi.json" with { type: "json" };

export const products = (req, res) => {
  res.json(productsData.products);
};

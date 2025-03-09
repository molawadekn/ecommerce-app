import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};
import Login from './models/loginModel.js';
import Product from './models/productModel.js';

const createTestData = async () => {
  await Login.sync({ force: true });
  await Product.sync({ force: true });

  await Login.bulkCreate([
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ]);

  await Product.bulkCreate([
    { name: 'Product 1', price: 10.0, description: 'Description for product 1' },
    { name: 'Product 2', price: 20.0, description: 'Description for product 2' },
    { name: 'Product 3', price: 30.0, description: 'Description for product 3' },
  ]);
};

export default createTestData;

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  // Add more products as needed
];

const inventory = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
  // Add more inventory items as needed
];

module.exports = { products, inventory };
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Cart = sequelize.define('Cart', {
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
});

const Inventory = sequelize.define('Inventory', {
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
});

const Order = sequelize.define('Order', {
  user_id: { type: DataTypes.INTEGER, allowNull: false }
});

const OrderItem = sequelize.define('OrderItem', {
  order_id: { type: DataTypes.INTEGER, allowNull: false },
  product_id: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = { Cart, Inventory, Order, OrderItem, sequelize };
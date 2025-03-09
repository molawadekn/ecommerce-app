const { Cart, Inventory } = require('../models');

async function addToCart(userId, productId, quantity) {
  const inventoryItem = await Inventory.findOne({ where: { product_id: productId } });
  if (!inventoryItem || inventoryItem.quantity < quantity) {
    throw new Error('Insufficient inventory');
  }

  const cartItem = await Cart.findOne({ where: { user_id: userId, product_id: productId } });
  if (cartItem) {
    cartItem.quantity += quantity;
    await cartItem.save();
  } else {
    await Cart.create({ user_id: userId, product_id: productId, quantity });
  }

  inventoryItem.quantity -= quantity;
  await inventoryItem.save();
}

module.exports = { addToCart };
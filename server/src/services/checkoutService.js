const { Cart, Order, OrderItem, Inventory } = require('../models');

async function checkout(userId) {
  const cartItems = await Cart.findAll({ where: { user_id: userId } });
  if (cartItems.length === 0) {
    throw new Error('Cart is empty');
  }

  const order = await Order.create({ user_id: userId });

  for (const cartItem of cartItems) {
    const inventoryItem = await Inventory.findOne({ where: { product_id: cartItem.product_id } });
    if (!inventoryItem || inventoryItem.quantity < cartItem.quantity) {
      throw new Error('Insufficient inventory for product ' + cartItem.product_id);
    }

    await OrderItem.create({
      order_id: order.id,
      product_id: cartItem.product_id,
      quantity: cartItem.quantity,
      price: cartItem.price
    });

    inventoryItem.quantity -= cartItem.quantity;
    await inventoryItem.save();
  }

  await Cart.destroy({ where: { user_id: userId } });
}

module.exports = { checkout };
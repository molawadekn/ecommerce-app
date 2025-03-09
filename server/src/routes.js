import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/logout', (req, res) => {
  // Handle logout logic here
  res.redirect('/');
});

// Handler function for /cart route
router.get('/cart', (req, res) => {
    // Implement your logic here
    res.send('Cart Page');
});

router.post('/add-to-cart', async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
      await addToCart(userId, productId, quantity);
      res.status(200).send('Item added to cart');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
  router.post('/checkout', async (req, res) => {
    try {
      const { userId } = req.body;
      await checkout(userId);
      res.status(200).send('Checkout successful');
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
// Export the router
export default router;
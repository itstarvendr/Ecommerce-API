const express = require('express');
const app = express();
// ... (existing code)

const Product = require('./product'); // Import the Product model

// Create a new product
app.post('/products', (req, res) => {
  const { name, quantity } = req.body;

  const product = new Product({
    name,
    quantity,
  });

  product.save()
    .then(() => {
      res.status(201).json({ message: 'Product created successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Failed to create product' });
    });
});

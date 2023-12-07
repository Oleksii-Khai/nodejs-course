const express = require('express');
const app = express();

const products = [
  { id: 1, name: 'Product 1', brand: 'Brand A' },
  { id: 2, name: 'Product 2', brand: 'Brand B' },
  { id: 3, name: 'Product 3', brand: 'Brand A' }
];

app.get('/', (req, res) => {
  res.send('Response for GET request');
});

app.get('/products/:brand', (req, res) => {
  const { brand } = req.params;

  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  res.json(filteredProducts);
});

app.listen(3000, () => console.log('Server listening on port 3000.'));

const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', async (req, res) => {
  return res.json(products);
});

router.get('/products/:brand', blockSpecialBrand, (req, res) => {
  const { brand } = req.params;
  const filteredProducts = products.filter(
    (product) => product.brand === brand
  );

  res.json(filteredProducts);
});

router.get('/productswitherror', (req, res) => {
  let err = new Error('processing error');
  err.statusCode = 400;
  throw err;
});

module.exports = router;

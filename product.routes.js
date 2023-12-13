const express = require('express');
const products = require('./products');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

router.get('/products', async (req, res) => {
  const id = req.query.id;
  if (id && !isNaN(id)) {
    const filteredProducts = products.filter(
      (product) => product.id === Number(id)
    );
    return res.json(filteredProducts);
  } else {
    return res.json(products);
  }
});

router.get('/products/:param', blockSpecialBrand, (req, res) => {
  const { param } = req.params;
  let filteredProducts;
  console.log(Number(param));
  if (!isNaN(param)) {
    filteredProducts = products.filter((product) => {
      return product.id === Number(param);
    });
    console.log(filteredProducts);
  } else if (param && isNaN(param)) {
    filteredProducts = products.filter((product) => product.brand === param);
  }

  res.json(filteredProducts);
});

router.get('/productswitherror', (req, res) => {
  let err = new Error('processing error');
  err.statusCode = 400;
  throw err;
});

module.exports = router;

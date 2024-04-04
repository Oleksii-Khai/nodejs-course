const router = require('express').Router();

const { response } = require('express');
const db = require('../db');
const { products } = require('../db/schema');

router.post('/products', async (req, res) => {
  const { body } = req;
  if (!Object.keys(body).length) {
    return res.sendStatus(400);
  }
  await db.insert(products).values(body);
  return res.sendStatus(201);
});

module.exports = router;

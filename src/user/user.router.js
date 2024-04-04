const router = require('express').Router();

const { eq } = require('drizzle-orm');
const db = require('../db');
const { users, products } = require('../db/schema');

router.post('/users', async (request, response) => {
  const { body } = request;
  await db.insert(users).values(body);
  return response.sendStatus(201);
});

router.get('/users', async (request, response) => {
  const users = await db.query.users.findMany();
  return response.status(200).json({ users });
});

router.get('/users/:id/products', async (request, response) => {
  const { id } = request.params;

  //   next condition operator checks if user id in params is valid
  if (id === ' ' || isNaN(id)) {
    return response.sendStatus(400);
  }

  const userProducts = await db.query.products.findMany({
    where: eq(products.userId, +id)
  });
  return response.status(200).json({ userProducts });
});

module.exports = router;

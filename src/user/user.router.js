const router = require('express').Router();

const db = require('../db');
const { users } = require('../db/schema');

router.post('/users', async (request, response) => {
  const { body } = request;
  await db.insert(users).values(body);
  return response.sendStatus(201);
});

router.get('/users', async (request, response) => {
  const users = await db.query.users.findMany();
  return response.status(200).json({ users });
});

module.exports = router;

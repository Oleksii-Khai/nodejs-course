const router = require('express').Router();

router.post('/users', (request, response) => {
  return response.json({ route: 'get-users' });
});

module.exports = router;

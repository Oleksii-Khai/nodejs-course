const router = require('express').Router();

router.get('/users', (request, response) => {
  return response.json({ route: 'get-users' });
});

module.exports = router;

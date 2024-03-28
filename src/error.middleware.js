function errorResponder(err, req, res, next) {
  res.header('Content-Type', 'application/json');
  res.status(err.statusCode).send(err.message);
}

module.exports = { errorResponder };

const express = require('express');
const bodyParser = require('body-parser');

const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');
const userRouter = require('./user/user.router');
const productRouter = require('./product/product.router');

const app = express();

const PORT = 3000;

// app.use(express.json()); // built-in mdlwr to handle/parse requests with json body | is based on body-parser

app.use(bodyParser.json());

app.use(logRequest);
app.use(errorResponder);

app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

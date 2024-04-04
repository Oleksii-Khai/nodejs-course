const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./product.routes');
const { logRequest } = require('./middleware');
const { errorResponder } = require('./error.middleware');
const userRouter = require('./user/user.router');

const app = express();

const PORT = 3000;

// app.use(express.json()); // built-in mdlwr to handle/parse requests with json body | is based on body-parser

app.use(bodyParser.json());
app.use(logRequest);
app.use(productRoutes);
app.use(errorResponder);

app.use(userRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const productRouter = require('./routes/productRouter');
const saleRouter = require('./routes/saleRouter');

const app = express();
app.use(express.json());

app.use(cors());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

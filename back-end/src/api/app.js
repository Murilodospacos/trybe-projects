const express = require('express');
const cors = require('cors');
const path = require('path')
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const productRouter = require('./routes/productRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);


app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

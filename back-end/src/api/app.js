const express = require('express');
const cors = require('cors')
const loginRouter = require('./routes/loginRouter');
// const registerRouter = require('./routes/registerRouter')

const app = express();
app.use(express.json());

app.use(cors());
app.use('/', loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

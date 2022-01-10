const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/loginRouter');
const registerRouter = require('./routes/registerRouter');
const manageRouter = require('./routes/manageRouter');

const app = express();
app.use(express.json());

app.use(cors());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/admin/manage', manageRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;

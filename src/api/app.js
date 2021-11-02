const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRoutes = require('../routes/usersRoutes');
const loginRoutes = require('../routes/loginRoutes');
const recipesRoutes = require('../routes/recipesRoutes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/recipes', recipesRoutes);
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

module.exports = app;

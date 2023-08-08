const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routes.loginRoutes);

app.use((error, _req, res, _next) => {
  console.log(error);
  res.status(500).send({ message: 'Erro genérico' });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

const express = require('express');
require('express-async-errors');

const routes = require('./routes');
const mapStatusHTTP = require('./utils/mapStatusHTTP');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routes.loginRoutes);
app.use('/user', routes.userRoutes);
app.use('/categories', routes.categoriesRoutes);

app.use((error, _req, res, _next) => {
  const { status, message } = error;
  res.status(mapStatusHTTP(status)).json({ message });
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

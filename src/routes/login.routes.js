const route = require('express').Router();

const validateLoginFields = require('../middlewares/validateLoginFields');
const { loginController } = require('../controllers');

route.post('/', validateLoginFields, loginController.login);

module.exports = route;
const route = require('express').Router();
const { postController } = require('../controllers');
const validateAuth = require('../middlewares/validateAuth');

route.get('/', validateAuth, postController.getAll);

module.exports = route;
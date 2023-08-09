const route = require('express').Router();
const { postController } = require('../controllers');
const validateAuth = require('../middlewares/validateAuth');

route.get('/', validateAuth, postController.getAll);
route.get('/:id', validateAuth, postController.getById);

module.exports = route;
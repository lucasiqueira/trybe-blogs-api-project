const route = require('express').Router();
const { userController } = require('../controllers');
const validateAuth = require('../middlewares/validateAuth');
const validateNewUserInfo = require('../middlewares/validateNewUserInfo');

route.get('/', validateAuth, userController.getAllUsers);
route.get('/:id', validateAuth, userController.getUserById);
route.post('/', validateNewUserInfo, userController.createUser);

module.exports = route;
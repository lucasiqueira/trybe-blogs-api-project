const route = require('express').Router();
const { userController } = require('../controllers');
const validateNewUserInfo = require('../middlewares/validateNewUserInfo');

route.post('/', validateNewUserInfo, userController.createUser);

module.exports = route;
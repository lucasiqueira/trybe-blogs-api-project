const route = require('express').Router();
const { categoryController } = require('../controllers');
const validateNewCategoryInfo = require('../middlewares/validateNewCategoryInfo');
const validateAuth = require('../middlewares/validateAuth');

route.post('/', validateAuth, validateNewCategoryInfo, categoryController.createCategory);

module.exports = route;
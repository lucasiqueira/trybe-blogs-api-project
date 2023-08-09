const { categoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const createCategory = async (req, res) => {
  const { status, data } = await categoryService.createCategory(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAll,
  createCategory,
};
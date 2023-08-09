const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAll = async (req, res) => {
  const { status, data } = await postService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAll,
};
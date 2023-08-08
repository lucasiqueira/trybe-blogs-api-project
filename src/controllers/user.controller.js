const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  res.status(mapStatusHTTP(status)).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const createUser = async (req, res) => {
  const { status, data } = await userService.createUser(req.body);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
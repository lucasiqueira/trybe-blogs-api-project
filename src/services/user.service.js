const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');
const removePassword = require('../utils/removePassword');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { status: 'SUCCESSFUL', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: 'password' } });

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }

  return { status: 'SUCCESSFUL', data: user };
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return { status: 'SUCCESSFUL', data: user };
};

const createUser = async (data) => {
  const user = await getUserByEmail(data.email);
  if (user.data) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  await User.create(data);
  const token = createToken({ payload: removePassword(data) });
  return { status: 'CREATED', data: { token } };
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
};
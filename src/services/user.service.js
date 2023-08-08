const { createToken } = require('../auth/validateJWT');
const { User } = require('../models');
const removePassword = require('../utils/removePassword');

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
  getUserByEmail,
  createUser,
};
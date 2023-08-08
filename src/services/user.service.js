const { User } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  getUserByEmail,
};
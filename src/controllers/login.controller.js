const { createToken } = require('../auth/validateJWT');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');
const removePassword = require('../utils/removePassword');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await userService.getUserByEmail(email);
  
  if (!data || data.dataValues.password !== password) {
    res.status(400).json({ message: 'Invalid fields' });
  }

  const dataWithoutPassword = removePassword(data.dataValues);
  const token = createToken({ payload: dataWithoutPassword });

  res.status(mapStatusHTTP(status)).json({ token });
};

module.exports = {
  login,
};
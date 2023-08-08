const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'segredo-generico';

const JWTConfig = {
  algorithm: 'HS256',
  expiresIn: '5d',
};

const createToken = (payload) => jwt.sign(payload, secretKey, JWTConfig);

module.exports = {
  createToken,
};
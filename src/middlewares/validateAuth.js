const { getPayload } = require('../auth/validateJWT');

const extractToken = (bearerToken) => 
  (bearerToken.includes('Bearer') ? bearerToken.split(' ')[1] : bearerToken);

const validateAuth = (req, _res, next) => {
  try {
    const bearerToken = req.header('Authorization');

    if (!bearerToken) {
      next({ status: 'UNAUTHORIZED', message: 'Token not found' });
    }

    const token = extractToken(bearerToken); 
    const data = getPayload(token);
    req.payload = data.payload;

    next();
  } catch (error) {
    next({ status: 'UNAUTHORIZED', message: 'Expired or invalid token' });
  }
};

module.exports = validateAuth;
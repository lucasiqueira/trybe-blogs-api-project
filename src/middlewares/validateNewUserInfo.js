const { EMAIL_REGEX } = require('../constants');

const validateNewUserInfo = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    next({ status: 'INVALID_VALUE', 
      message: '"displayName" length must be at least 8 characters long' });
  }
  if (!EMAIL_REGEX.test(email)) {
    next({ status: 'INVALID_VALUE', 
      message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    next({ status: 'INVALID_VALUE', 
      message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = validateNewUserInfo;
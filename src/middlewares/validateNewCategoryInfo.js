const validateNewCategoryInfo = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    next({ status: 'INVALID_VALUE', message: '"name" is required' });
  }
  next();
};

module.exports = validateNewCategoryInfo;

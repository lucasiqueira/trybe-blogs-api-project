const { Category } = require('../models');

const getAll = async () => {
  const data = await Category.findAll();
  return { status: 'SUCCESSFUL', data };
};

const createCategory = async (data) => {
  const isCategoryAlreadyRegistered = await Category.findOne({ where: { name: data.name } });
  if (isCategoryAlreadyRegistered) {
    return { status: 'CONFLICT', data: { message: 'Category already registered' } };
  }
  const category = await Category.create(data);
  return { status: 'CREATED', data: category };
};

module.exports = {
  getAll,
  createCategory,
};
const removePassword = (data) => {
  const { password, ...dataWithoutPassword } = data;
  return dataWithoutPassword;
};

module.exports = removePassword;

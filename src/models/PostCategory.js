/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  }, {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategoryTable.associate = ({BlogPost, Category}) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;

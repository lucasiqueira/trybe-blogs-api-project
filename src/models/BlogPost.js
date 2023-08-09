/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */
const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
      onUpdate: new Date(),
    },
  }, {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });

  BlogPostTable.associate = ({User}) => {
    BlogPostTable.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    })
  }

  return BlogPostTable;
}

module.exports = BlogPostSchema;

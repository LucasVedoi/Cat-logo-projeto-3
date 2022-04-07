const database = require("./../database");
const Sequelize = require("sequelize");

const Image_files = database.define("image_files",  {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  filename: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  filepath: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  
  mimetype: {
     type: Sequelize.TEXT,
    allowNull: false,
  },
  size: {
     type: Sequelize.BIGINT,
    allowNull: false,
  }, 
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Image_files

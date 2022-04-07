const database = require("./../database");
const Sequelize = require("sequelize");

const Albuns_ = database.define("albuns",  {
  id_albuns: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_album: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nome_autor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  evento_album: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  album_imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  local_album: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_album: {
    type: Sequelize.DATE,
    allowNull: false,
  }, 
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Albuns_;

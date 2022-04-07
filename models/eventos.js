const database = require("./../database");
const Sequelize = require("sequelize");

const Eventos_img = database.define("eventos", {
  id_eventos: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_evento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  local_imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  local_imagem_titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false,
});

module.exports = Eventos_img;


const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {     
  dialect: 'postgres',
  protocol: 'postgres',     
  dialectOptions: {         
    ssl: {             
      require: true,             
      rejectUnauthorized: false         
    }     
  } 
});

sequelize
  .authenticate()
  .then(() => console.log("conexão bem sucessideda"))
  .catch((err) => console.log.error(' conexão mal sucessida'))

module.exports = sequelize;




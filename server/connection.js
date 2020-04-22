const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

const connAuth  = async function(sequelize) {
    try {
        await sequelize.authenticate;
        console.log("Connection has been established!");
    } catch (error) {
        console.log("error: Couldn't establish a connection");
    }
}

connAuth(sequelize);

module.exports = sequelize;
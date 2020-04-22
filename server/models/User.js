const Sequelize = require("sequelize");
const sequelize = require("../../connection");
const Model = Sequelize.Model;

class User extends Model {}

User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
},{sequelize, modelName: 'user'})

module.exports = User;
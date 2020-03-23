const Sequelize = require("sequelize");
const sequelize = require("../../connection");
const Model = Sequelize.Model;

class Ayuda extends Model {}

Actividades.init({
    title: Sequelize.STRING,
    number: Sequelize.STRING,
    link: Sequelize.STRING,
},{sequelize, modelName: 'ayuda'})

module.exports = Ayuda;
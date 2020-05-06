const Sequelize = require("sequelize");
const sequelize = require("../connection");
const Model = Sequelize.Model;

class Actividades extends Model {}

Actividades.init({
    title: Sequelize.STRING,
    organizer: Sequelize.STRING,
    date: Sequelize.DATE,
    description: Sequelize.STRING,
    link: Sequelize.STRING,
},{sequelize, modelName: 'actividades'})

module.exports = Actividades;
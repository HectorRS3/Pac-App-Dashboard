const Sequelize = require("sequelize");
const sequelize = require("../../connection");
const Model = Sequelize.Model;

class Actividades extends Model {}

Actividades.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    date: Sequelize.DATE,
    summary: Sequelize.STRING,
    link: Sequelize.STRING,
    tags: Sequelize.STRING,
},{sequelize, modelName: 'actividades'})

module.exports = Actividades;
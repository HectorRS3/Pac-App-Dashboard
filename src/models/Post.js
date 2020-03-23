const Sequelize = require("sequelize");
const sequelize = require("../../connection");
const Model = Sequelize.Model;

class Post extends Model {}

Articles.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    summary: Sequelize.STRING,
    body: Sequelize.STRING,
    link: Sequelize.STRING,
    tags: {
        type: Sequelize.ARRAY,
        allowNull: true,
        default: []
    },
    category: Sequelize.STRING
},{sequelize, modelName: 'post'})

module.exports = Post;
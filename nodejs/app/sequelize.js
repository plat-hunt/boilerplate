const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('user', 'root', '12345', {
    host: 'db',
    dialect: 'mysql',
    operatorsAliases: false,
    freezeTableName: true,
});

exports.user = UserModel(sequelize, Sequelize);

module.exports = exports;

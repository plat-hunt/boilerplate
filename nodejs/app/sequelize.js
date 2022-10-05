const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('test', 'root', '12345', {
    host: 'db',
    dialect: 'mysql',
    port: '3306',
    operatorsAliases: '0',
    freezeTableName: '1',
});

exports.user = UserModel(sequelize, Sequelize);

module.exports = exports;

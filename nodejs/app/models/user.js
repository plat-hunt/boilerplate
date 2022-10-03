module.exports = (sequelize, type) => sequelize.define('users', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
        type: type.STRING,
        allowNull: false,
    },
    lastName: {
        type: type.STRING,
        allowNull: false,
    },
    phoneNo: {
        type: type.STRING,
        allowNull: false,
    }
});

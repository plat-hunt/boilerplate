const model = require('../../../sequelize');

class UserRepo {
    constructor() {
        this.model = model;
    }

    create(data) {
        return this.model.user.create(data);
    }

    getList() {
        return this.model.user.findAll();
    }
}

module.exports = UserRepo;


const Joi = require('joi');
const UserRepo = require('../repositories/user');
const TransformUser = require('../transformers/user');

const inputSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNo: Joi.string().required(),
});

exports.getList = async () => {
    const userRepository = new UserRepo();

    const users = await userRepository.getList().then(
        result => result.map(TransformUser.transform),
    );
    return users;
};

exports.create = async (data) => {
    const UserRepository = new UserRepo();

    let input = data;
    try {
        input = await Joi.validate(data, inputSchema);
    } catch (err) {
        throw err.message;
    }

    await UserRepository.create(input);
    return {
        message: 'success',
    };
};

module.exports = exports;

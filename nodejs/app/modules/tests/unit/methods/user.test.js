const test = require('ava');
const sinon = require('sinon');
const _ = require('lodash');

const userMethod = require('../../../src/methods/user');
const userRepo = require('../../../src/repositories/user');

const payload = {
    firstName: 'bayu',
    lastName: 'sucipto',
    phoneNo: "080012341234"
};

const resultList = [{
    firstName: 'bayu',
    lastName: 'sucipto',
    phoneNo: "080012341234"
}];

const expectedList = [{
    name: 'bayu sucipto',
    phoneNo: "080012341234"
}];

test.serial('get list user success', async (t) => {
    sinon.stub(userRepo.prototype, 'getList').resolves(resultList);
    const result = await userMethod.getList();
    t.deepEqual(result, expectedList);
});

test.serial('create user success', async (t) => {
    sinon.stub(userRepo.prototype, 'create').resolves('success');
    const result = await userMethod.create(payload);
    t.deepEqual(result, {
        message: 'success',
    });
});

test.serial('create user failed', async (t) => {
    const mock = _.cloneDeep(payload);
    delete mock.phoneNo;
    sinon.stub(userRepo.prototype, 'create').resolves('success');
    try {
        await userMethod.create(mock);
        t.fail('must throw error');
    } catch (err) {
        t.is(err, '"phoneNo" is required');
    }
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', () => {
    sinon.restore();
});

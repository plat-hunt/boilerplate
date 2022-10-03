const router = require('express').Router();
const method = require('../modules/src/methods/user');

router.get('/v1/user', (req, res) => method.getList().then(result => res.json(result)));

router.post('/v1/user', async (req, res) => {
    const { body } = req;
    return method.create(body).then(result => res.json(result)).catch(err => res.json(err));
});

module.exports = router;

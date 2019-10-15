const router = require('express').Router();
const User = require('./user-model.js');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    User.insert({username, password: bcrypt.hashSync(password, 8)})
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Error Registering'})
    })
});

module.exports = router;
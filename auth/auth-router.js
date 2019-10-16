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

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    User
    .findByUsername(username)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json({ message: 'login succesful'});
        } else {
            res.status(500).json({ message: 'Wrong password'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Error Registering'})
    })
});


module.exports = router;
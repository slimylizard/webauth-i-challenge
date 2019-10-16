const bcrypt = require('bcryptjs');
const User = require('./user-model')

module.exports = (req, res) => {
    const { username, password } = req.headers;
    User
    .findByUsername(username)
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            next();
        } else {
            res.status(500).json({ message: 'not authorized'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Error Registering'})
    })
}
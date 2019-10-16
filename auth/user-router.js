const router = require('express').Router();
const User = require('./user-model')
const authorize = require('./middleware')

router.get('/', authorize, (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errror: "could not get users" })
        })
})


module.exports = router
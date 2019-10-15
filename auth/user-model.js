const db = require('../data/db.js')

function insert(user) {
    db.insert(user, 'id')
        .then(([id]) => id)
}

module.exports = {
    insert
};
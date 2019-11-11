const db = require('../data/db-config')

module.exports = {
    find,
    findBy,
    add
}

function find() {
    return db('users').select('id', 'username')
}

function findBy(username) {
    return db('users').where(username)
}

function add(user) {
    return db('users')
        .instert(user, 'id')
        .then(ids => {
            const [id] = ids
            return (findBy(id))
        })
}
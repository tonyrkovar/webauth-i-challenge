const bcrypt = require('bcryptjs')

const db = require('../users/users-model')

module.exports = (req, res, next) => {
    if (req.session && req.session.username) {
        next()
    } else {
        res.status(401).json({ Error: "Please Login to continue" })
    }
}



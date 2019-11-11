const bcrypt = require('bcryptjs')

const db = require('../users/users-model')

module.exports = (req, res, next) => {
    const { username, password } = req.headers;

    if (username && password) {
        db.findBy({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next()
                } else {
                    res.status(401).json({ error: "Invalid password" })
                }
            })
            .catch(err => {
                res.status(500).json('invalid username')
            })
    } else {
        res.status(400).json({ error: 'Please login' })
    }
}



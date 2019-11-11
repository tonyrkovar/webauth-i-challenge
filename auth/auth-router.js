const bcrypt = require('bcryptjs')

const router = require('express').Router()

const db = require('../users/users-model')


//endpoint will be /api/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.findBy({ username })
        .first()
        .then(user => {
            res.status(200).json(`hello ${username}`)
        })
        .catch(err => {
            res.status(400).json('invalid username')
        })
})

//endpoint of /api/register
router.post('/register', (req, res) => {
    let pass = req.body
    bcrypt.hash(pass.password, 12, (err, hashedPass) => {
        pass.password = hashedPass

        db.add(pass)
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                res.status(400).json({ error: `Unable to register ${err}` })
            })
    })
})

module.exports = router;
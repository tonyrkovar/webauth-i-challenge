const bcrypt = require('bcryptjs')

const router = require('express').Router()
const session = require('express-session')
const KnexSessionStorage = require('connect-session-knex')(session)

const db = require('../users/users-model')


//endpoint will be /api/login
router.post('/login', (req, res) => {
    const { password, username } = req.body;
    db.findBy(username)
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.username = user.username
                res.status(200).json(`Hello there ${username}`)
            } else {
                res.status(401).json('please login')
            }
        })
        .catch(errors => {
            res.status(500).json(`bad request ${errors}`)
        })
})

//endpoint of /api/register
router.post('/register', (req, res) => {
    let pass = req.body
    bcrypt.hash(pass.password, 12, (err, hashedPass) => {
        pass.password = hashedPass

        db.add(pass)
            .then(user => {
                req.session.username = user.username
                res.status(200).json(user)
            })
            .catch(errors => {
                res.status(400).json({ error: `Unable to register ${errors}` })
            })
    })
})

module.exports = router;
const router = require('express').Router()

const userAuth = require('../auth/auth-middleware')

const db = require('./users-model')

router.get('/', userAuth, (req, res) => {
    db.find()
        .then(list => {
            res.status(200).json(list)
        })
        .catch(err => {
            res.status(400).json({ message: "There was an error with your request, unable to get users" })
        })
})
module.exports = router;
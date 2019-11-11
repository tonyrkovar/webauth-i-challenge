const router = require('express').Router()
const bcrypt = require('bcryptjs')

const usersRouter = require('../users/users-router')

router.use('/users', usersRouter)

router.get('/', (req, res) => {
    res.json({ message: "api is online" })
})

module.exports = router;
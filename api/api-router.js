const router = require('express').Router()
const bcrypt = require('bcryptjs')

const usersRouter = require('../users/users-router')
const authRouter = require('../auth/auth-router')

router.use('/users', usersRouter)
router.use('/', authRouter)

router.get('/', (req, res) => {
    res.json({ message: "api is online" })
})

module.exports = router;
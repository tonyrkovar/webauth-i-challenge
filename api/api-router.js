const router = require('express').Router()
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.json({ message: "api is online" })
})

module.exports = router;
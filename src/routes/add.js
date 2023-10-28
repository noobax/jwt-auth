const express = require('express')
const router = express.Router()
const cookieJwtAuth = require('../middleware/cookieJwtAuth')

router.post('/', cookieJwtAuth, (req, res) => {
	console.log(res.user.name)
	res.redirect('/welcome')
})

module.exports = router

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


const getUser = (name) => {
	return { userId: 123, password: 'password', name }
}

router.post('/', (req, res) => {
	const { name, password } = req.body

	const user = getUser(name)
	if (user.password !== password) {
		res.status(403).send('Wrong username or password')
		res.end()
	}
	const token = jwt.sign({name:name}, 'oui', { expiresIn: '1h' })
	res.cookie('token', token)
	res.redirect('/welcome')
})

module.exports = router


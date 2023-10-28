const jwt = require('jsonwebtoken')

const cookieJwtAuth = (req, res, next) => {
	const token = req.cookies.token

	try {
		const user = jwt.verify(token, 'oui')
		res.user = user
		next()
	} catch(err) {
		res.clearCookie()
		res.redirect('/')
	}
}

module.exports = cookieJwtAuth

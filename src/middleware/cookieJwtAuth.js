const jwt = require('jsonwebtoken')

exports.cookieJwtAuth = function (req, res, next) {
	const token = req.cookie.token

	try {
		const user = jwt.verify(token, 'oui')
		req.user = user
		next()
	} catch(err) {
		res.clearCookie('token')
		res.redirect('/')
	}
}

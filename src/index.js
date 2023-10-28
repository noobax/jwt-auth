const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

//static page
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.get('/welcome', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/welcome.html'))
})

const loginRouter = require('./routes/login.js')
app.use('/login', loginRouter)
const addRouter = require('./routes/add.js')
app.use('/add', addRouter)

app.listen(3000)

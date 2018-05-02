const express = require('express')
const bodyParser = require('body-parser')
const routes = require('../src/routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

routes(app)

app.listen(process.env.PORT || 3000)

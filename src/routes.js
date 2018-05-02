const middleware = require('./middleware')
const schemas = require('./middleware/schemas')
const { health, file } = require('require-all')(`${__dirname}/handlers`)

module.exports = app => {
  return [
    app.get('/', health),
    app.post('/', middleware.validateSchema(schemas.file), file.addFile),
  ]
}
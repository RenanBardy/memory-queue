const Joi = require('joi')

module.exports = {
  validateSchema
}

function validateSchema (schema) {
  return async (req, res, next) => {
    try {
      await Joi.validate(req.body, schema)
    } catch (e) {
      return res.status(400).jsonp({
        error: e.name,
        message: e.details[0].message
      })
    } finally {
      next()
    }
  }
}

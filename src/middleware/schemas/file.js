const Joi = require('joi')

module.exports = Joi.object().keys({
  type: Joi.string().required(),
  name: Joi.string().required()
})

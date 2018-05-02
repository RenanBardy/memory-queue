
module.exports = healthCheck

function healthCheck (req, res) {
  res.jsonp({ status: 'ok' })
}


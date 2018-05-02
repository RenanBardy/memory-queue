const queue = require('../services/queue')

module.exports = {
  addFile
}

function addFile (req, res) {
  queue.addFile(req.body)
  
  res.jsonp({
    status: 1,
    file: req.body
  })
}

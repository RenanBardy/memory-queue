const { TIMEOUT } = require('./constants')

module.exports = function (file, queue, readNext) {
  const compute = () => {
    console.log(file)
    queue.removeFile(file.id)
    readNext(queue)
  }

  setTimeout(compute, TIMEOUT[file.type])
}


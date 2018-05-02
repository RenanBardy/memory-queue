const { TIMEOUT } = require('./constants')
const fileType = require('./fileType')
const compute = require('./compute')

module.exports = {
  subscribe
}

let isSubscribed = false
function subscribe (queue) {
  if (!isSubscribed) {
    isSubscribed = true
    readData(queue)
  }
}

function unsubscribe () {
  isSubscribed = false
}


function readData (queue) {
  if (queue.isQueueEmpty()) {
    unsubscribe()
    return
  }

  const file = queue.getNextFile(fileType.get()) || queue.getNextFile()
  fileType.set(file)
  return compute(file, queue, readData)
}

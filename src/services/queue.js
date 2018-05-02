const worker = require('./worker')
const queue = {
  addFile,
  removeFile,
  getNextFile,
  isQueueEmpty
}

module.exports = queue

let files = []

function addFile (file) {
  files.push({...file, id: Date.now()})
  worker.subscribe(queue)
}

function removeFile (id) {
  files = files.filter(file => file.id !== id)
  return files
}

function getNextFile (type) {
  if (type) {
    return files.find((file, index) => file.type === type)
  }

  return files[0]
}

function isQueueEmpty () {
  return files.length === 0
}


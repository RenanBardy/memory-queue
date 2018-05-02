const { TIMEOUT } = require('./constants')
const time = Math.round(TIMEOUT.pdf / TIMEOUT.html)

module.exports = fileType()

function fileType () {
  let htmlTimeExecuted = 0
  
  const set = file => file.type === 'pdf' ? htmlTimeExecuted = 0 : null

  const get = () => {
    if (htmlTimeExecuted < time) {
      htmlTimeExecuted++
      return 'html'
    }
    
    htmlTimeExecuted = 0
    return 'pdf'
  }

  return {
    set,
    get
  }
}
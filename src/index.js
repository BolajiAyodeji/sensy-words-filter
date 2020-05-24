
module.exports = sensitiveWords = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
)

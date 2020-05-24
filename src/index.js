module.exports = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
)

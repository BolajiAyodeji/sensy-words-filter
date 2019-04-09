
export default (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '***'
  )
)

import sensyWords from '.'

test('replaces blacklisted words with asterisks', () => (
  expect(sensyWords(
    'sensy-words, a package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
    )).toBe('sensy-words, a package for **** out a list of **** words')
))

test('replaces multiple instances of blacklisted words', () => (
  expect(sensyWords(
    'sensy-words, a sensitive package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
    )).toBe('sensy-words, a **** package for **** out a list of **** words')
))

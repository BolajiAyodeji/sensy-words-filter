# sensy-words

## Setup

```bash
$ npm install sensy-words-filter --save
```

## Usage

```js
const {sensitiveWords} = require('sensitive-words')

// ES2015 modules
import {sensitiveWords} from 'sensitive-words'
```

### Replaces blacklisted words with asterisks

```js
const words =
  sensitiveWords(
    'sensy-words, a package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
  )

console.log(words)
// sensy-words, a package for **** out a list of **** words
```

### Replaces multiple instances of blacklisted words

```js
const words =
  sensitiveWords(
    'sensy-words, a sensitive package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
  )

console.log(words)
// sensy-words, a **** package for **** out a list of **** words
```

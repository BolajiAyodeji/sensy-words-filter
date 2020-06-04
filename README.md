<div align="center">
  
# sensy-words 

[![NPM](https://nodei.co/npm/sensy-words-filter.png?compact=true)](https://nodei.co/npm/sensy-words-filter/)

</div>

## Setup

```bash
$ npm install sensy-words-filter --save
```

## Usage

```js
const {sensyWords} = require('sensy-words-filter')

// ES2015 modules
import {sensyWords} from 'sensy-words-filter'
```

### Replaces blacklisted words with asterisks

```js
const words =
  sensyWords(
    'sensy-words, a package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
  )

console.log(words)
// sensy-words, a package for **** out a list of **** words
```

### Replaces multiple instances of blacklisted words

```js
const words =
  sensyWords(
    'sensy-words, a sensitive package for filtering out a list of sensitive words',
    ['filtering', 'sensitive']
  )

console.log(words)
// sensy-words, a **** package for **** out a list of **** words
```

# sensitive-words

# Setup

```bash
$ npm install sensitive-words --save
```

# Example

```js
const {sensitiveWords} = require('sensitive-words')
// ES2015 modules
import {sensitiveWords} from 'sensitive-words'

const filtered =
  sensitiveWords(
    'The new apple macbook pro will have a touchbar',
    ['pro', 'touchbar']
  )

console.log(filtered)
// The new apple macbook *** will have a ***
```

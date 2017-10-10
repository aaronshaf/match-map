## Installation

```
yarn add match-map
```

Or:

```
npm install match-map --save
```

## Usage

```javascript
import matchMap from 'match-map'
```

Or:

```javascript
const matchMap = require('match-map')
```

Then:

```javascript
const Processing = Symbol()
const Successful = Symbol()
const Error = Symbol()

const state = Successful
const statusMessage = matchMap(state)([
  [Loading, 'Your task is processing'],
  [Successful, 'Your task was successful!'],
  [Error, 'There was an error with your task :(']
])
```

Alternatively:

```javascript
const statusMessage = matchMap(state)(new Map([
  [Loading, 'Your task is processing'],
  [Successful, 'Your task was successful!'],
  [Error, 'There was an error with your task :(']
]))
```

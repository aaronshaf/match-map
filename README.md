## Installation

```
yarn add match-map
```

Or:

```
npm install match-map --save
```

## Usage

```
import matchMap from 'match-map'
```

Or:

```
const matchMap = require('match-map')
```

Then:

```
const Processing = Symbol()
const Successful = Symbol()
const Error = Symbol()

const state = Successful
const statusMessage = match(state) ([
  [Loading, 'Your task is processing'],
  [Successful, 'Your task was successful!'],
  [Error, 'There was an error with your task :(']
])
```

Alternatively:

```
const statusMessage = match(state) (new Map([
  [Loading, 'Your task is processing'],
  [Successful, 'Your task was successful!'],
  [Error, 'There was an error with your task :(']
]))
```

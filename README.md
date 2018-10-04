# Number Suffix Helper

## Table of contents

- [Installing](#installing)
- [Usage](#usage)

## Installing

```bash
npm install --save number_suffix_helper
```

## Usage

```javascript
// Require the package
const number_suffix_helper = require('number_suffix_helper')

const day = 3
// The second parameter is optional, if it is not provided the default return for an
// invalid number (number > 31) will be an empty string ''.
const suffix = number_suffix_helper.getDayEndingFromNumber(day, '')
```

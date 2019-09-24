#!/usr/bin/env node
'use strict'
const meow = require('meow')

meow(`

  Usage
    $ mikqi
`)

require('import-jsx')('./ui')

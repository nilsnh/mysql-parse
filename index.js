#!/usr/bin/env node
'use strict'

const { buildMysqlParams, parseUri } = require('./lib')
const readline = require('readline')

// run when called as command like 'node index.js'
if (require.main === module) {
  // handle being called like so 'mysql-param <connection-string>'
  const uri = process.argv[2]
  if (uri) {
    process.stdout.write(buildMysqlParams(uri))
    process.exit(0)
  }
  // give user two seconds to pipe a connection string before giving up
  const timeRef = setTimeout(() => {
    if (!uri) {
      console.error('Error. Please provide a mysql connection string.')
      process.exit(1)
    }
  }, 1000)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  // handle being called like so 'echo <connection-string> | mysql-param'
  rl.on('line', line => {
    clearTimeout(timeRef)
    process.stdout.write(buildMysqlParams(line))
  })
} else {
  // run when included as a module
  module.exports = {
    buildMysqlParams,
    parseUri
  }
}

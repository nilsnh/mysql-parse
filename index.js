#!/usr/bin/env node
'use strict'

const { buildMysqlParams, parseUri } = require('./lib')

if (require.main === module) {
  // run when called as command
  const uri = process.argv[2]
  if (!uri) {
    console.error('Error. Please provide a mysql connection string.')
    process.exit(1)
  }
  process.stdout.write(buildMysqlParams(uri))
} else {
  // run when included as a module
  module.exports = {
    buildMysqlParams,
    parseUri
  }
}

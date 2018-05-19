#!/usr/bin/env node
'use strict'

const { buildMysqlParams } = require('./lib')

const pjson = require('./package.json')
const program = require('commander')

program
  .version(pjson.version)
  .description(pjson.description)
  .option('--uri <uri>', 'A mysql connection uri to be parsed')
  .parse(process.argv)

if (!program.uri) {
  console.error('No --uri provided, please provide one.')
  process.exit(1)
}

process.stdout.write(buildMysqlParams(program.uri))

const { URL } = require('url')

function parseUri(uri) {
  const {
    protocol = '',
    username: user,
    password,
    port,
    hostname: host,
    pathname = ''
  } = new URL(uri)
  return {
    scheme: protocol.replace(':', ''),
    user,
    password,
    host,
    port,
    database: pathname.replace('/', '')
  }
}

function buildMysqlParams(uri) {
  const { scheme, user, password, host, port, database } = parseUri(uri)
  return [
    user ? `-u ${user}` : '',
    user ? `-p${password}` : '',
    host ? `-h ${host}` : '',
    port ? `-P ${port}` : '',
    database ? `${database}` : ''
  ].join(' ')
}

module.exports = {
  parseUri,
  buildMysqlParams
}

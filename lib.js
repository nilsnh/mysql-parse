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
  const { user, password, host, port, database } = parseUri(uri)
  return (
    [
      user ? `-u ${user}` : '',
      password ? `-p${password}` : '',
      host ? `-h ${host}` : '',
      port ? `-P ${port}` : '',
      database ? `${database}` : ''
    ]
      // filter out falsy values to avoid extra spaces on the command line.
      .filter(value => value)
      .join(' ')
  )
}

module.exports = {
  parseUri,
  buildMysqlParams
}

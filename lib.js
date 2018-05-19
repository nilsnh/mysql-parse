function parseUri(uri) {
  const [
    originalString,
    scheme,
    user,
    password,
    host,
    port,
    database
  ] = /(\w*):\/\/(\w*):(\w*)@([\w|\.|-]*):(\d*)\/(\w*)/g.exec(uri)
  return { scheme, user, host, password, port, database }
}

function buildMysqlParams(uri) {
  const { scheme, user, host, password, port, database } = parseUri(uri)
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

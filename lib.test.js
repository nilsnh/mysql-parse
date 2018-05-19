import test from 'ava'
import { parseUri, buildMysqlParams } from './lib'

test('should be able to parse fully formed url', t => {
  const testUrl =
    'mysql://asdf123123:zxcvas.df234789@example123.org.somewhere-here.com:3306/khe4zx5encg0ao15'
  t.deepEqual(parseUri(testUrl), {
    scheme: 'mysql',
    user: 'asdf123123',
    password: 'zxcvas.df234789',
    host: 'example123.org.somewhere-here.com',
    port: '3306',
    database: 'khe4zx5encg0ao15'
  })
})

test('should be able to prepare mysql connection parameters', t => {
  const has = (str, target) => str.indexOf(target) !== -1
  const testUrl =
    'mysql://asdf123123:zxcvas.df234789@example123.org.somewhere-here.com:3306/khe4zx5encg0ao15'
  t.is(
    buildMysqlParams(testUrl),
    '-u asdf123123 -pzxcvas.df234789 -h example123.org.somewhere-here.com -P 3306 khe4zx5encg0ao15',
    'was not able to generate correct cmd connection string'
  )
})

# Node Mysql parse

A command line utility for parsing a mysql connection string and generating the correct connection parameters to feed to a mysql command.

## Installation

Install by running `npm install -g mysql-parse`

## Example usage

**Basic**

Running `mysql-parse --uri mysql://examplename:somepassword@examplehost:3306/dbname)` will generate string like this `-u examplename -psomepassword -h examplehost -P 3306 dbname` which you can pass to mysql or mysqldump commands.

**Using mysql**

`mysql $(mysql-parse --uri <some mysql connection string>)`

**Using mysqldump**

`mysqldump $(mysql-parse --uri <some mysql connection string>) > dump.sql`

**Passing in other options to mysql/mysqldump**

Because the last thing out of mysql-parse is the database name (if defined in the connection string), options need to be added before mysql-parse like so:

`mysqldump --compact $(mysql-parse --uri <some mysql connection string>) > dump.sql`

## Development

1.  Download this project.
2.  Run tests with `npm test`.
3.  Develop and submit PR. Please note: If you are considering substantial changes, please open an issue first because the feature you're thinking of might not be right for this project.

## License

Project code is licensed under the MIT license, [see license](LICENSE.txt).

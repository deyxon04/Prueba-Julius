'use stric'

const app = require('./src/app')
const db = require('./src/libs/db')
const keys = require('./keys')
const chalk = require('chalk')

async function main () {
  await app.listen(keys.PORT)
  await db()
  console.log(`${chalk.green('Server on port')} ${chalk.yellow(keys.PORT)}`)
}
main()

'use stric'

const app = require('./src/app')
const db = require('./src/libs/db')
const config = require('./src/config/config')
const chalk = require('chalk')

async function main () {
  await app.listen(config.PORT)
  await db()
  console.log(`${chalk.green('Server on port')} ${chalk.yellow(config.PORT)}`)
}
main()

// @flow

import { Dropbox, Db, buildMessage }from './utils.js'
import fs from 'fs'

export function push(configFile: string): Promise<any> {
  return new Promise(async (resolve) => {
    // Read config from file
    const buffer = fs.readFileSync(configFile, 'utf8')
    const config = JSON.parse(buffer)

    // Download database
    const dropbox = new Dropbox(config.url)
    const db = await dropbox.download()

    // Run database query and build message
    const dbService = new Db(db)
    const results = await dbService.runQuery(config.variables)
    const message = await buildMessage(config.message, results)
    resolve(message)
  })
}

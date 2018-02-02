// @flow

export class Dropbox {
  url: string

  constructor(url: string) {
    this.url = url
  }

  download(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.url)
    })
  }

}

export class Db {
  dbFile: string

  constructor(dbFile: string) {
    this.dbFile = dbFile
  }

  runQuery(query: string): Promise<any> {
    return new Promise(resolve => {
      resolve(query)
    })
  }
}

export function buildMessage(message: string, variables: string[]) {
  return message + variables[0]
}

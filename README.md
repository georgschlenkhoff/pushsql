# pushsql [![NPM version][npm-image]][npm-url][![Build Status][build-status]][build-url][![codecov][codecov]][codecov-url][![dependencies Status][dependencies-status][dependencies-url]][![devDependencies Status][devDependencies-status]][devDependencies-url][![Gitter Support][gitter-image]][gitter-url]

> Build push notifications, for e.g. Pusher, from various SQL statements.

## Features

* Configure push notifications from SQL statements
* Use variables that will be replaced by SQL results
* Download databases files from Dropbox
* Support for SQLite databases

## Installation

Install pushSql from with npm:

```
npm i -g pushSql
```

## Usage

Create configuration file, `push.js`:

```
{
  "db": {
    "type": "dropbox",
    "url": "http://somelink.com",
    "token": "process.env.DROPBOX_TOKEN"
  },
  "variables": {
    "a": "SELECT col from table;"
  },
  "message": "Your message is ${a}"
}
```

## API

## Contribution

1. git clone https://github.com/georgschlenkhoff/pushsql.
1. Run `npm run watch`.
1. Build out `README.md` to be clear about capabilities.
1. Build [walking skeleton].
    1. Add code in `./src/<file>.js` as if library works.
    1. Add integration test in `./test/<file>.test.js`, see it failing.
    1. Add JsDoc (e.g. in vim with [:JsDoc]) tags.
    1. Write unit tests for modules and its functions.
1. Implement functions.
1. When stopping watch (`<CTRL><C>`), check test coverage = 100%?.
1. Run `npm run docs`.
1. Run `npm run lint`.
1. Commit files to git.

## License

MIT © [georgschlenkhoff](https://twitter.com/gschlenkhoff)

[npm-image]: https://badge.fury.io/js/pushsql.svg
[npm-url]: https://npmjs.org/package/pushsql
[build-status]: https://travis-ci.org/georgschlenkhoff/pushsql.svg?branch=master)
[build-url]: https://travis-ci.org/georgschlenkhoff/pushsql
[codecov]: https://codecov.io/gh/georgschlenkhoff/pushsql/badge.svg?branch=master
[codecov-url]: https://codecov.io/gh/georgschlenkhoff/pushsql?branch=master
[devDependencies-status]: https://david-dm.org/georgschlenkhoff/pushsql/dev-status.svg
[dependencies-status]: https://david-dm.org/georgschlenkhoff/pushsql/status.svg
[dependencies-url]: https://david-dm.org/georgschlenkhoff/pushsql
[devDependencies-url]: https://david-dm.org/georgschlenkhoff/pushsql?type=dev
[gitter-image]: https://badges.gitter.im/georgschlenkhoff/pushsql.png
[gitter-url]: https://gitter.im/georgschlenkhoff/pushsql
[walking skeleton]: https://codeclimate.com/blog/kickstart-your-next-project-with-a-walking-skeleton
[:JsDoc]: https://github.com/heavenshell/vim-jsdoc

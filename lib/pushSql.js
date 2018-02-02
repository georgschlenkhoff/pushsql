'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.push = push;

var _utils = require('./utils.js');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function push(configFile) {
  return new Promise((() => {
    var _ref = _asyncToGenerator(function* (resolve) {
      // Read config from file
      const buffer = _fs2.default.readFileSync(configFile, 'utf8');
      const config = JSON.parse(buffer);

      // Download database
      const dropbox = new _utils.Dropbox(config.url);
      const db = yield dropbox.download();

      // Run database query and build message
      const dbService = new _utils.Db(db);
      const results = yield dbService.runQuery(config.variables);
      const message = yield (0, _utils.buildMessage)(config.message, results);
      resolve(message);
    });

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })());
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildMessage = buildMessage;
class Dropbox {

  constructor(url) {
    this.url = url;
  }

  download() {
    return new Promise(resolve => {
      resolve(this.url);
    });
  }

}

exports.Dropbox = Dropbox;
class Db {

  constructor(dbFile) {
    this.dbFile = dbFile;
  }

  runQuery(query) {
    return new Promise(resolve => {
      resolve(query);
    });
  }
}

exports.Db = Db;
function buildMessage(message, variables) {
  return message + variables[0];
}

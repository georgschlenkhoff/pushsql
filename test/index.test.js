'use strict'
const pushSql = require('../src/index')
const expect = require('chai').expect

describe('pushSql\'s ', () => {

  describe('push', () => {
    it('creates a push message', () => {
      expect(pushSql).to.respondTo('push')
    })
  })

})

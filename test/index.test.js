'use strict'
const pushSql = require('../src/index')
const expect = require('chai').expect

describe('pushSql\'s ', () => {

  describe('method', () => {
    it('fulfills a function', () => {
      expect(pushSql).to.respondTo('myFn')
    })
  })

  describe('async method', () => {
    it('fulfills an async function', async () => {
      expect(null).to.be.a('null')
    })
  })

})

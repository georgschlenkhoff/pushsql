'use strict'
const expect = require('chai').expect
import { Dropbox }from '../src/utils.js'

describe('utils', () => {

  describe('Dropbox', () => {
    var dropbox
    before(() => {
      dropbox = new Dropbox('')
    })

    describe('download()', () => {
      it('responds', async () => {
        expect(dropbox).to.respondTo('download')
      })
    })
  })

})

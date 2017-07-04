const pry            = require('pryjs')
const assert         = require("chai").assert
const app            = require('../../server')
const request        = require('request')
const Food           = require('../../lib/models/food')

const environment    = process.env.NODE_ENV || 'test'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)

describe("Food Endpoint", function() {
  this.timeout(9001)

  before((done) => {
    this.port   = 9001
    this.server = app.listen(this.port, (error, result) => {
      if (error) { return done(err) }
      done()
    })

    this.request = request.defaults({
      baseUrl: 'http://localhost:9001'
    })
  })

  after(() => {
    this.server.close()
  })

  it("GET api/v1/foods", function(done) {
    this.request.get("api/v1/foods", function(error, resposne) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)
      assert.equal(response.statusCode, 200)
      //assert.equal(parsed.length, 5)
      done()
    })
  })

  xit("GET /api/v1/foods/:id", function() {
    this.request.get("api/v1/foods/1", function(error, response) => {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)
      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 1)
    })
  })

  it("POST /api/v1/foods", function() {

  })

  it("PUT /api/v1/foods/:id", function() {

  })

  it("DELETE /api/v1/foods/:id", function() {

  })
})

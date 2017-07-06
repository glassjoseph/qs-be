const pry            = require('pryjs')
const assert         = require("chai").assert
const app            = require('../../server')
const request        = require('request')
const environment    = process.env.NODE_ENV || 'test'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)

describe("Meal Endpoint", function() {
  this.timeout(100000)
  before(function(done) {
    this.port = 9001

    this.server = app.listen(this.port, function(error, result) {
      if(error) {return done(err) }
      done()
    })

    this.request = request.defaults(
      {baseUrl: 'http://localhost:9001'}
    )
  })

  after(function(done) {
    this.server.close()
    done()
  })

  it("GET /api/v1/meals", function(done) {
    this.request.get('/api/v1/meals', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 4)
      done()
    })
  })

  it("GET /api/v1/meals/:id", function(done) {
    this.request.get('/api/v1/meals/1', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 1)
      done()
    })
  })


  ///HERE
  it("GET an id that doesn't exist", function(done) {
    this.request.get('/api/v1/meals/9001', function(error, response) {
      assert.equal(response.statusCode, 404)
      done()
    })
  })
})

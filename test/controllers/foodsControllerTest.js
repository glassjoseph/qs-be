const pry            = require('pryjs')
const assert         = require("chai").assert
const app            = require('../../server')
const request        = require('request')
const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)

describe("Food Endpoint", function() {
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

  it("GET /api/v1/foods", function(done) {
    this.request.get('/api/v1/foods', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 4)
      done()
    })
  })

  it("GET /api/v1/foods/:id", function(done) {
    this.request.get('/api/v1/foods/1', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 1)
      done()
    })
  })

  it("GET an id that doesn't exist", function(done) {
    this.request.get('/api/v1/foods/9001', function(error, response) {
      assert.equal(response.statusCode, 404)
      done()
    })
  })

  it("POST /api/v1/foods", function(done) {
    this.request.post('/api/v1/foods?name=Chocolate&calories=100', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed[0].name, "Chocolate")
      assert.equal(parsed[0].calories, 100)
      assert.equal(parsed[0].id, 5)
      done()
    })
  })

  it("PUT /api/v1/foods/:id", function(done) {
    this.request.put('/api/v1/foods/5?name=Tuna Sandwhich&calories=80', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed[0].name, "Tuna Sandwhich")
      assert.equal(parsed[0].calories, 80)
      assert.equal(parsed[0].id, 5)
      done()
    })
  })

  it("PUT for an id that doens't exist", function(done) {
    this.request.put('/api/v1/foods/9001?name=pleeb&calories=330', function(error, response) {
      assert.equal(response.statusCode, 404)
      done()
    })
  })

  it("DELETE /api/v1/foods/:id", function(done) {
    this.request.delete('/api/v1/foods/5', function(error, response) {
      if(error) {done(error)}
      assert.equal(response.statusCode, 204)
      assert.equal(response.body.length, 0)
    done()
    })
  })

  it("DELETE an id that doesn't exist", function(done) {
    this.request.delete('/api/v1/foods/9001', function(error, response) {
      assert.equal(response.statusCode, 404)
    done()
    })
  })
})
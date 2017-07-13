const assert         = require("chai").assert
const app            = require('../../server')
const request        = require('request')
const environment    = process.env.NODE_ENV || 'test'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)

describe("Meal Log Endpoint", function() {
  this.timeout(1000000)
  before(function(done) {
    this.port = 9001

    this.server = app.listen(this.port, function(error, result) {
      if(error) {return done(err) }
    })

    this.request = request.defaults(
      {baseUrl: 'http://localhost:9001'}
    )

    database.raw('TRUNCATE meal_logs, foods, meals RESTART IDENTITY CASCADE')
    .then( () => {
      database.raw("INSERT INTO foods (name, calories) VALUES ('calzone', 250)")
      .then( () => {
        database.raw("INSERT INTO meals (name) VALUES ('Breakfast')")
        .then(() => {
          database.raw("INSERT INTO foods (name, calories) VALUES ('Grilled Cheese', 250)")
          .then( () => {
            database.raw("INSERT INTO meals (name) VALUES ('Lunch')")
            .then(() => {
              database.raw("INSERT INTO meal_logs (meal_id, food_id) VALUES (1, 1)")
              .then(() => {
                database.raw("INSERT INTO meal_logs (meal_id, food_id) VALUES (1, 2)")
                .then(() => {
                  done()
                })
              })
            })
          })
        })
      })
    })
  })

  after(function() {
    this.server.close()
  })

  it("GET /api/v1/meal_logs", function(done) {
    this.request.get('/api/v1/meal_logs', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 2)
      done()
    })
  })

  it("GET /api/v1/meal_logs/:id", function(done) {
    this.request.get('/api/v1/meal_logs/1', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)

      assert.equal(response.statusCode, 200)
      assert.equal(parsed.length, 1)
      done()
    })
  })

  it("GET an id that doesn't exist", function(done) {
    this.request.get('/api/v1/meal_logs/9001', function(error, response) {
      assert.equal(response.statusCode, 404)
      done()
    })
  })

  it("POST /api/v1/meal_logs", function(done) {
    this.request.post('/api/v1/meal_logs?meal_id=1&food_id=1', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)
      assert.equal(response.statusCode, 200)
      assert.equal(parsed[0].meal_id, 1)
      assert.equal(parsed[0].food_id, 1)
      assert.equal(parsed[0].id, 3)
      done()
    })
  })

  it("PUT /api/v1/meal_logs/:id", function(done) {
    this.request.put('/api/v1/meal_logs/1?food_id=2&meal_id=2', function(error, response) {
      if(error) {done(error)}
      const parsed = JSON.parse(response.body)
      assert.equal(response.statusCode, 200)
      assert.equal(parsed[0].meal_id, 2)
      assert.equal(parsed[0].food_id, 2)
      assert.equal(parsed[0].id, 1)
      done()
    })
  })

  it("PUT for an id that doesn't exist", function(done) {
    this.request.put('/api/v1/meal_logs/9001?meal_id=1&food_id=3', function(error, response) {
      assert.equal(response.statusCode, 404)
      done()
    })
  })

  it("DELETE /api/v1/meal_logs/:id", function(done) {
    this.request.delete('/api/v1/meal_logs/1', function(error, response) {
      if(error) {done(error)}
      assert.equal(response.statusCode, 204)
      assert.equal(response.body.length, 0)
    done()
    })
  })

  it("DELETE an id that doesn't exist", function(done) {
    this.request.delete('/api/v1/meal_logs/9001', function(error, response) {
      assert.equal(response.statusCode, 404)
    done()
    })
  })



})

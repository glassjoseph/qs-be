const pry = require('pryjs')
const assert  = require("chai").assert
const app     = require("../../server")
const request = require("request")


describe("mealsController", function() {
  this.timeout(90001)
  before((done) => {
    this.port   = 9001
    this.server = app.listen(this.port, (error, result) => {
      if(error) {return done(error)}
      done()

    this.request = request.defaults({baseUrl: "http://localhost:9001"})
    })
  })

  after(() => {
    this.server.close()
  })



  // it("index returns all meals", (done) => {
  //   this.request('/api/v1/meals', (error, response) => {
  //     if(error){ done(error) }
  //     const meals = response.data.rows
  //     assert.equal(meals.length, 2)
  //     done()
  //   })
  // })


  it("show returns a specific meal", () => {

  })

})

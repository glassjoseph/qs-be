const assert  = require("chai").assert
const app     = require("../server")
const request = require("request")

describe("Server", () => {
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

  it("should exist", () => {
    assert(app)
  })

//THESE GET THERE OWJN TEST FILE
//   describe("GET /", () => {
//     it("should return a 200", (done) => {
//       this.request.get("/", (error, response) => {
//         if(error){ done(error) }
//         assert.equal(response.statusCode, 200)
//         done()
//       })
//     })
//   })
//
//   describe("GET /api/v1/foods", () => {
//     it("should return all food objects", (done) => {
//       this.request.get("/api/v1/foods", (error, response) => {
//         if(error){ done(error)}
//         assert.equal(response.statusCode, 200)
//         done()
//       })
//     })
//   })
//
//   describe("GET /api/v1/meals", () => {
//     it("should return all meal objects", (done) => {
//       this.request.get("/api/v1/meals", (error, response) => {
//         if(error){ done(error)}
//         assert.equal(response.statusCode, 200)
//         assert.include(response.body, "lunch"))
//         done()
//       })
//     })
//   })
//
// })

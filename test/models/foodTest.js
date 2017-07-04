const pry = require('pryjs')
const food = require ('../../lib/models/food')
const assert = require("chai").assert
const Food = new food()
const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)


// describe("Food", () => {
//   it("#all", () => {
//
//   })
//
//   it("#find", () => {
//
//   })
//
//   it("#create", () => {
//
//   })
//
//   it("#update", () => {
//
//   })
//
//   it("#delete", () => {
//
//   })
// })

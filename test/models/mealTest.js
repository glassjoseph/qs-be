const meal = require ('../../lib/models/meal')
const assert = require("chai").assert
const Meal = new meal()
const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)


//
// describe("Meal", () => {
//   before((done) => {
//     database.raw(
//       'INSERT INTO meals (name) VALUES (?)',
//       ["Breakfast"]
//     ),
//     database.raw(
//       'INSERT INTO meals (name) VALUES (?)',
//       ["Lunch"]
//     )
//     .then(() => { done()})
//   })
//
//   after((done) => {
//     database.raw('TRUNCATE meals RESTART IDENTITY')
//     .then(() => { done()})
//   })
//
//
//   it("all() returns all meals", () => {
//     const all_meals = Meal.all
//     assert.equal(meals.length, 2)
//   })
//
//
// })

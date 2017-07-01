const pry = require('pryjs')
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
//       'INSERT INTO meals (name, created_at) VALUES (?, ?)',
//       ["Breakfast", new Date]
//     ),
//     database.raw(
//       'INSERT INTO meals (name, created_at) VALUES (?, ?)',
//       ["Lunch", new Date]
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
//     // eval(pry.it)
//     assert.equal(meals.length, 2)
//   })
// 
//
// })

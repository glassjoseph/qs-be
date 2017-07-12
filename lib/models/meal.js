const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)
const pry = require('pryjs')

class Meal {
  all() {
    return database.raw('SELECT * FROM meals')
  }
  find(id) {
    return database.raw(`SELECT * FROM meals WHERE id = ${id}`
  )
  }
}

module.exports = Meal

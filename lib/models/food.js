const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)
const pry            = require('pryjs')


class Food {
  all() {
    return database.raw('SELECT * FROM foods')
    // eval(pry.it)
  }
  find() {

  }
}

module.exports = Food

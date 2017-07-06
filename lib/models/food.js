const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)
const pry            = require('pryjs')


class Food {
  all() {
    return database.raw('SELECT * FROM foods')
  }
  
  find(id) {


    return database.raw(`SELECT * FROM foods WHERE id = ${id}`)
  }

  create(name, calories) {
    return database.raw("INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?) RETURNING *", [name, calories, new Date])
  }

  update(id, name, calories) {
    return database.raw(`UPDATE foods SET name = '${name}', calories = ${calories} WHERE id = ${id} RETURNING *`)
  }

  delete(id) {
    return database.raw('DELETE FROM foods WHERE id = ?', [id])
  }
}

module.exports = Food

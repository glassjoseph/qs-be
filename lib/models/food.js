const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)
const pry            = require('pryjs')


class Food {
  all() {
    return database.raw('SELECT * FROM foods')
  }

  find(derp) {
    return database.raw(`SELECT * FROM foods WHERE name = ?`, [derp])
  }

  create(name, calories) {
    return database.raw("INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING *", [name, calories])
  }

  update(id, name, calories) {
    return database.raw(`UPDATE foods SET name = '${name}', calories = ${calories} WHERE id = ${id} RETURNING *`)
  }

  deactivate(id) {
    return database.raw(`UPDATE foods SET food_status = 'inactive' WHERE id = ?`, [id])
  }
}

module.exports = Food

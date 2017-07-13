const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)


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

  update_name(name, new_name) {
    return database.raw(`UPDATE foods SET name = '${new_name}' WHERE name = '${name}' RETURNING *`)
  }

  update_calories(name, calories) {
    return database.raw(`UPDATE foods SET calories = ${calories} WHERE name = '${name}' RETURNING *`)
  }

  deactivate(id) {
    return database.raw(`UPDATE foods SET food_status = 'inactive' WHERE id = ?`, [id])
  }
}

module.exports = Food

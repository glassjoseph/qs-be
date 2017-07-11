const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)
const pry            = require('pryjs')


class Food {
  all() {
    return database.raw('SELECT * FROM foods')
  }

  find(derp) {
    //eval(pry.it)
    return database.raw(`SELECT * FROM foods WHERE name = ?`, [derp])
  }

  create(name, calories) {
    // eval(pry.it)
    return database.raw("INSERT INTO foods (name, calories) VALUES (?, ?) RETURNING *", [name, calories])
  }

  update(id, name, calories) {
    return database.raw(`UPDATE foods SET name = '${name}', calories = ${calories} WHERE id = ${id} RETURNING *`)
  }

  // Not in use currently
  // delete(id) {
  //   return database.raw('DELETE FROM foods WHERE id = ?', [id])
  // }

  deactivate(id) {
    return database.raw(`UPDATE foods SET food_status = 'inactive' WHERE id = ${id}`)
  }
}

module.exports = Food

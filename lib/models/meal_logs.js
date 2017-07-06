const environment     = process.env.NODE_ENV || 'development'
const configuration   = require('../../knexfile')[environment]
const database        = require('knex')(configuration)
const pry             = require('pryjs')


class MealLog {
  all() {
    return database.raw('SELECT * FROM meal_logs')
  }

  find(id) {
    return database.raw(`SELECT * FROM meal_logs where id = ${id}`)
  }

  find_by_meal(id) {
    return database.raw('SELECT * FROM meal_logs where meal_id = ?' [id])
  }

  create(meal_id, food_id) {
    return database.raw('INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?) RETURNING *', [meal_id, food_id, new Date])
  }

  delete(id) {
    return database.raw('DELETE FROM meal_logs WHERE id = ?', [id])
    // return database('meal_logs').where('id', id).del()
  }

  update(id, meal_id, food_id) {
    return database.raw(`UPDATE meal_logs SET meal_id = '${meal_id}', food_id = ${food_id} WHERE id = ${id} RETURNING *`)
  }
}


module.exports = MealLog
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
    return database.raw('INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?) RETURNING *', [meal_id, food_id])
  }

  delete(meal_id, food_id) {
    return database.raw(`
      DELETE FROM meal_logs
        WHERE id IN
        (SELECT id FROM meal_logs
          WHERE meal_id = ${meal_id}
          AND food_id = ${food_id} LIMIT 1)`
      )
  }

  update(id, meal_id, food_id) {
    return database.raw(`UPDATE meal_logs SET meal_id = '${meal_id}', food_id = ${food_id} WHERE id = ${id} RETURNING *`)
  }
}


module.exports = MealLog

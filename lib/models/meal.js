const environment    = process.env.NODE_ENV || 'development'
const configuration  = require('../../knexfile')[environment]
const database       = require('knex')(configuration)

class Meal {
  all() {
    return database.raw('SELECT * FROM meals')
  }
  find(name) {
    // return database.raw(`SELECT * FROM meals WHERE id = ${id}`)
    return database.raw(`
    SELECT meals.id, meals.name, foods.id, foods.name, foods.calories
     FROM foods
     JOIN meal_logs
     ON foods.id=meal_logs.food_id
     JOIN meals
     ON meals.id=meal_logs.meal_id
     WHERE meals.name = ?`, [name]
   )
  }
}

module.exports = Meal

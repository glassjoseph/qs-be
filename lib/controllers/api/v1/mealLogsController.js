const pry = require('pryjs')
const meal_log = require("../../../models/meal_logs")
const Meal_log = new meal_log()


class MealLogsController {

  index(request, response) {
    Meal_log.all()
    .then((data) => {
      const meal_logs = data.rows
      if(meal_logs.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(meal_logs)
      }
    })
  }

  show(request, response) {
    Meal_log.find(request.params.id)
    .then((data) => {
      const meal_log = data.rows
      if(meal_log.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(meal_log)
      }
    })
  }

  create(request, response) {
    Meal_log.create(request.query.meal_id, request.query.food_id)
    .then((data) => {
      const meal_log = data.rows
      if(meal_log.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(meal_log)
      }
    })
  }

  delete(request, response) {
    const meal_id = request.query.meal_id
    const food_id = request.query.food_id
    Meal_log.delete(meal_id, food_id).then(() => {
      response.sendStatus(204)
    })
  }

  update(request, response) {
    let meal_id = request.query.meal_id
    let food_id = request.query.food_id
    let id      = request.params.id
    Meal_log.update(id, meal_id, food_id).then((data) => {
      const updated_meal_log = data.rows
      if (updated_meal_log.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(updated_meal_log)
      }
    })
  }

}


module.exports = MealLogsController

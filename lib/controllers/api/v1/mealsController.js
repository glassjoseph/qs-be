const pry = require('pryjs')
const meal = require('../../../models/meal')
const Meal = new meal()

class MealsController {
  index(request, response) {
    Meal.all()
    .then((data) => {
      const meals = data.rows
      if(meals == null){
        response.sendStatus(404)
      } else  {
        response.json(meals)
      }
    })
  }

  show(request, response) {
    const id = request.params.id
    Meal.find(id)
    .then((data) => {
      const meal = data.rows
      if(meal == null) {
        response.sendStatus(404)
      } else {
        response.json(meal)
      }
    })
  }
}

module.exports = MealsController

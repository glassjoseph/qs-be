const meal = require('../../../models/meal')
const Meal = new meal()

class MealsController {
  index(request, response) {
    Meal.all()
    .then((data) => {
      const meals = data.rows
      if(meals.length == 0){
        response.sendStatus(404)
      } else  {
        response.json(meals)
      }
    })
  }

  show(request, response) {
    const name = request.params.name
    Meal.find(name)
    .then((data) => {
      const meal = data.rows
      if(meal.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(meal)
      }
    })
  }
}

module.exports = MealsController

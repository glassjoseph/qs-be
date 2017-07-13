const pry  = require('pryjs')
const food = require('../../../models/food')
const Food = new food()

class FoodsController {
  index(request, response) {
    Food.all()
    .then((data) => {
      const foods = data.rows
      if(foods.length == 0){
        response.sendStatus(404)
      } else {
        response.json(foods)
      }
    })
  }

  show(request, response) {
    const name = request.params.name
    Food.find(name)
    .then((data) => {
      const id = data.rows[0].id
      if(!id) {
        response.sendStatus(404)
      } else {
        response.json(id)
      }
    })
  }

  create(request, response) {
    let name       = request.body.name
    let calories   = request.body.calories
    Food.create(name, calories)
    .then((data) => {
      const new_food = data.rows
      if(new_food.length == 0) {
        response.sendStatus(404)
      } else {
        response.json(new_food)
      }
    })
  }

  update(request, response) {
    let name      = request.params.name
    let calories  = request.query.calories
    let new_name  = request.query.new_name
    if (new_name) {
      Food.update_name(name, new_name).then((data) => {
        const updated_food = data.rows
        if (updated_food.length == 0) {
          response.sendStatus(404)
        } else {
          response.json(updated_food)
        }
      })
    }
    if (calories) {
      Food.update_calories(name, calories).then((data) => {
        const updated_food = data.rows
        if (updated_food.length == 0) {
          response.sendStatus(404)
        } else {
          response.json(updated_food)
        }
      })
    }
  }

  delete(request, response) {
    let name = request.params.name
    Food.find(name)
    .then((data) => {
      const id = data.rows[0].id
      if(!food) {
        return response.sendStatus(404)
      } else {
        Food.deactivate(id)
        .then(() => {
          response.sendStatus(204) })
      }
    })
  }
}

module.exports = FoodsController

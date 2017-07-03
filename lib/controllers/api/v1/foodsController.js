const pry  = require('pryjs')
const food = require('../../../models/food')
const Food = new food()

class FoodsController {
  index(request, response) {
    Food.all()
    .then((data) => {
      const foods = data.rows
      if(!foods){
        response.sendStatus(404)
      } else {
        response.json(foods)
      }
    })
  }

  show(request, response) {
    const id = request.params.id
    Food.find(id)
    .then((data) => {
      const food = data.rows
      if(!food) {
        response.sendStatus(404)
      } else {
        response.json(food)
      }
    })
  }

  create(request, response) {
    let name       = request.query.name
    let calories   = request.query.calories

    Food.create(name, calories)
    .then((data) => {
      const new_food = data.rows
      if(!new_food) {
        response.sendStatus(404)
      } else {
        response.json(new_food)
      }
    })
  }

  update(request, response) {
    let name      = request.query.name
    let calories  = request.query.calories
    let id        = request.params.id
    Food.update(id, name, calories).then((data) => {
      const updated_food = data.rows
      if (!updated_food) {
        response.sendStatus(404)
      } else {
        response.json(updated_food)
      }
    })

  }

  delete(request, response) {
    let id = request.params.id
    Food.find(id)
    .then((data) => {
      const food = data.rows[0]
      if(!food) {
        return response.sendStatus(404)
      } else {
        // eval(pry.it)
        Food.delete(food.id)
        .then(response.sendStatus(204))
      }
    })

    // eval(pry.it)
    // Food.delete(request.params.id)
    // .then((data) => {
    //   //const foodName = data.rows
    //   //`Sucessfully deleted food: ${foodName}`
    //   //eval(pry.it)
    //   data
    // })
  }
}

module.exports = FoodsController

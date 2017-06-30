const pry  = require('pryjs')
const food = require('../../../models/food')
const Food = new food()

class FoodsController {
  index(request, response) {
    Food.all()
    .then((data) => {
      const foods = data.rows
      if(foods == null){
        response.sendStatus(404)
      } else {
        response.json(foods)
      }
    })
  }
  show() {

  }
  create() {

  }
  update() {

  }

  delete() {
    
  }
}

module.exports = FoodsController

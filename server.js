const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const foodsController   = require('./lib/controllers/api/v1/foodsController')
const mealsController = require('./lib/controllers/api/v1/mealsController')
const cors              = require('cors')
const pry               = require('pryjs')
const FoodsController   = new foodsController()
const MealsController   = new mealsController()

app.use(cors({origin: "*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('port', process.env.PORT || 3000)
app.locals.title = "Quantified Self BE"


//ORIGINAL
// not useful for an api
app.get('/', (request, response) => {
  response.send("Welcome to our app!")
})


// app.get('/api/v1/foods', (request, response) => {
//   response.json({name: "Prociottio", calories: 60})
// })

// app.get('/api/v1/meals', (request, response) => {
//   response.json({name: "lunch"})
// })

if(!module.parent){
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}`)
  })
}

//NEW

app.get('/api/v1/foods', FoodsController.index)
app.get('/api/v1/foods/:id', FoodsController.show)
app.post('/api/v1/foods', FoodsController.create)

// app.post('/api/v1/foods', (request, response) => {
//   FoodsController.create(request, response)
// })

app.put('/api/v1/foods/:id', (request, response) => {
  FoodsController.update(request, response)
})



app.delete('/api/v1/foods/:id', (request, response) => {

  FoodsController.delete(request, response)
})



app.get('/api/v1/meals', (request, response) => {
  MealsController.index(request, response)
})

app.get('/api/v1/meals/:id', (request, response) => {
  // eval(pry.it)
  MealsController.show(request, response)
})

module.exports = app

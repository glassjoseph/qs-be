const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const foodsController   = require('./lib/controllers/api/v1/foodsController')
const mealsController = require('./lib/controllers/api/v1/mealsController')
const mealLogsController =  require('./lib/controllers/api/v1/mealLogsController')

const cors              = require('cors')
const pry               = require('pryjs')
const FoodsController   = new foodsController()
const MealsController   = new mealsController()
const MealLogsController   = new mealLogsController()

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

app.get('/api/v1/foods', (request, response) => {
  FoodsController.index(request, response)
})

app.post('/api/v1/foods', (request, response) => {
  FoodsController.create(request, response)
})

app.put('/api/v1/foods/:id', (request, response) => {
  FoodsController.update(request, response)
})

app.get('/api/v1/foods/:id', (request, response) => {
  FoodsController.show(request, response)
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


app.get('/api/v1/meal_logs', (request, response) => {
  MealLogsController.index(request, response)
})

app.get('/api/v1/meal_logs/:id', (request, response) => {
  MealLogsController.show(request, response)
})

app.post('/api/v1/meal_logs', (request, response) => {
  MealLogsController.create(request, response)
})

app.delete('/api/v1/meal_logs/:id', (request, response) => {
  MealLogsController.delete(request, response)
})

app.put('/api/v1/meal_logs/:id', (request, response) => {
  MealLogsController.update(request, response)
})


module.exports = app

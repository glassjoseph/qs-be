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

//NEW

app.get('/api/v1/foods', FoodsController.index)
app.get('/api/v1/foods/:id', FoodsController.show)
app.post('/api/v1/foods', FoodsController.create)
app.put('/api/v1/foods/:id', FoodsController.update)
app.delete('/api/v1/foods/:id', FoodsController.delete)

app.get('/api/v1/meals', MealsController.index)
app.get('/api/v1/meals/:id', MealsController.show)


app.get('/api/v1/meal_logs', MealLogsController.index)
app.get('/api/v1/meal_logs/:id', MealLogsController.show)
app.post('/api/v1/meal_logs', MealLogsController.create)
app.put('/api/v1/meal_logs/:id', MealLogsController.update)
app.delete('/api/v1/meal_logs/:id', MealLogsController.delete)

if(!module.parent){
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}`)
  })
}

module.exports = app

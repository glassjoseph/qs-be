const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const foodsController   = require('./lib/controllers/api/v1/foodsController')
const cors              = require('cors')
const pry               = require('pryjs')
const FoodsController    = new foodsController()

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
  //eval(pry.it)
})


module.exports = app

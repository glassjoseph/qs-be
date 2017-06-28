const express          = require('express')
const app              = express()
const bodyParser       = require('bodyParser')
const md5              = require('md5')

app.set('port', process.env.PORT || 3000)
app.locals.title = "Quantified Self BE"

app.get('/', (request, response) => {
  response.send("Welcome to our app!")

})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
})

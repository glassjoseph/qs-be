# Quantified Self  

Hosted at: https://quantself-1701.herokuapp.com/

<!-- ## Setup -->

<!-- ## About This Project -->
## Endpoints

| Verb | Path  | Description  | Parameters |
|---|---|---|---|
|GET   | /api/v1/foods          | Returns a list of all foods   |   |
|GET   | /api/v1/foods/:name    | Returns a single food |   |
|POST   | /api/v1/foods         | Creates a food  |  `name` and `calories` |
|PUT   | /api/v1/foods/:name    | Updates a food  | `name` or `calories`  |
|DELETE   | /api/v1/foods/:name |  Deactivates a food |   |
|GET   | /api/v1/meals          | Returns a list of all meals  |   |
|GET   | /api/v1/meals/:name    | Returns a list of foods by meal |   |
|GET   | /api/v1/meal_logs      | Returns a list of all meal_logs  |   |
|GET   | /api/v1/meal_logs/:id   |  Returns a single meal_log |   |
|POST   | /api/v1/meal_logs     | Creates a meal_log | `meal_id` and `food_id`  |
|PUT   | /api/v1/meal_logs/:id   |  Updates a meal_log | `meal_id` and `food_id`  |
|DELETE   | /api/v1/meal_logs/  | Deletes a meal_log | `meal_id` and `food_id`  |


## Resources
  http://backend.turing.io/module4/lessons/building_and_testing_with_express
  http://backend.turing.io/module4/lessons/sql-in-node
  http://backend.turing.io/module4/lessons/advanced-js-fundamentals

## Repeat This project

mkdir 1701_quantified_self_backend
cd 1701_quantified_self_backend
mkdir test
touch test/server.js
touch server.js

1. npm init
<!-- in main: server.js -->
in test: mocha test/*test.js  #this will allow you to run the command "npm test"*
2. npm i express --save
3. npm i mocha --save-dev
4. npm i chai --save-dev
5. npm i request --save-dev  // Request docs: https://github.com/request/request
6. npm i body-parser --save
7. npm i md5 --save

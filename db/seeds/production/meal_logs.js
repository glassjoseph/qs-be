exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_logs, foods, meals RESTART IDENTITY CASCADE')
  .then(function() {
    return Promise.all([
    knex.raw(
      'INSERT INTO foods (name, calories) VALUES (?, ?)',
      ["Banana", 15]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories) VALUES (?, ?)',
      ["Sandwich", 25]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories) VALUES (?, ?)',
      ["Cherry Pie", 35]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories) VALUES (?, ?)',
      ["Burrito", 30]
    ),

    knex.raw(
      'INSERT INTO meals (name) VALUES (?)',
      ["Breakfast"]
    ),
    knex.raw(
      'INSERT INTO meals (name) VALUES (?)',
      ["Lunch"]
    ),
    knex.raw(
      'INSERT INTO meals (name) VALUES (?)',
      ["Dinner"]
    ),
    knex.raw(
      'INSERT INTO meals (name) VALUES (?)',
      ["Snacks"]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [1, 1]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [1, 2]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [2, 2]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [2, 3]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [3, 2]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [3, 3]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [4, 3]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id) VALUES (?, ?)',
      [4, 4]
    )
    ]);
  });
};

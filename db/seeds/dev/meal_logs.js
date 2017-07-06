exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meal_logs, foods, meals RESTART IDENTITY CASCADE')
  .then(function() {
    return Promise.all([
    knex.raw(
      'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      ["Banana", 15, new Date]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      ["Sandwich", 25, new Date]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      ["Cherry Pie", 35, new Date]
    ),
    knex.raw(
      'INSERT INTO foods (name, calories, created_at) VALUES (?, ?, ?)',
      ["Burrito", 30, new Date]
    ),

    knex.raw(
      'INSERT INTO meals (name, created_at) VALUES (?, ?)',
      ["Breakfast", new Date]
    ),
    knex.raw(
      'INSERT INTO meals (name, created_at) VALUES (?, ?)',
      ["Lunch", new Date]
    ),
    knex.raw(
      'INSERT INTO meals (name, created_at) VALUES (?, ?)',
      ["Dinner", new Date]
    ),
    knex.raw(
      'INSERT INTO meals (name, created_at) VALUES (?, ?)',
      ["Snacks", new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [1, 1, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [1, 2, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [2, 2, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [2, 3, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [3, 2, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [3, 3, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [4, 3, new Date]
    ),
    knex.raw(
      'INSERT INTO meal_logs (meal_id, food_id, created_at) VALUES (?, ?, ?)',
      [4, 4, new Date]
    )
    ]);
  });
};

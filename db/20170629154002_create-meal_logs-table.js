
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE meal_logs(
    id SERIAL PRIMARY KEY NOT NULL
  )`;
  return knex.raw(createQuery);
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE meal_logs`;
  return knex.raw(dropQuery);
};

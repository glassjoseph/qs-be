
exports.up = function(knex, Promise) {

let createQuery = `
CREATE TYPE status
 AS ENUM ('inactive', 'active')`;
 return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TYPE status`;
  return knex.raw(dropQuery)
};

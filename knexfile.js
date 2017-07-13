// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/quantified_self',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/quantified_self_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: 'postgres://jbvdyyfllpiazr:e63a69da25d929c556966b19becba17698246ef2530bdfde643fd7bec6d090eb@ec2-23-21-246-11.compute-1.amazonaws.com:5432/d8qu24fbqhk5pg',
    migrations: {
      directory: './db/migrations'
    },
    ssl: true,
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};

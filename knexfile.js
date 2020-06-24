const {knexConfig} = require('./src/db');

module.exports = {
  development: {
    ...knexConfig,
    loadExtensions: ['ts'],
    migrations: {
      directory: './src/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/seeds/dev',
    },
  },
  production: {
    // ...
  },
};

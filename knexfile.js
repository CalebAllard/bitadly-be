// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/bitadly.db'
    },
    useNullAsDefault:true,
    migrations:{
      directory:'./data/migrations',
    },
    seeds:{
      directory:'./data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },

  staging: {
    client: 'pq',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pq',
    connection: process.env.DB_URL,
    ssl: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./data/migrations'
    }
  }

};

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: `${process.env.DATABASE_NAME}_development`,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT,
    dialect: "mysql"
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: `${process.env.DATABASE_NAME}_test`,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT,
    dialect: "mysql"
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: `${process.env.DATABASE_NAME}_production`,
    host: process.env.DATABASE_HOSTNAME,
    port: process.env.DATABASE_PORT,
    dialect: "mysql"
  }
};
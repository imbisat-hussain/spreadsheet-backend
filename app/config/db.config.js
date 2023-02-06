module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "systellex",
  DB: "testdb",
  dialect: "postgres",
  port: 6001,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

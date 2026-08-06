const Pool = require("pg").Pool;

const pool = new Pool({
  //user: "postgres",
  user: "jbrown",
  //host: "localhost",
  host: "dpg-d9lq95f10e5c73e6olg0-a.ohio-postgres.render.com",
  //database: "fishes",
  database: "fishes_xj6v",
  //password: "Appledogfish1!",
  password: "iPjwxrPga6OKe7Pe9DOPOqjxgn0AnNrX",
  port: 5432,
  ssl: {rejectUnauthorized: false }
});

module.exports = pool;

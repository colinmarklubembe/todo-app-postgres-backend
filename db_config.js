// const Pool = require("pg").Pool;
// require("dotenv").config();

// try {
//   // console.log("DB_USER: ", process.env.DB_USER);
//   const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//   });

//   module.exports = pool;
// } catch (error) {
//   console.log("Error: ", error);
// }

const { Pool } = require("pg");

try {
  // const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  const connectionString =
    "postgres://colin:HhEt0J9hL2S2WBNPX2GCZSc8Tz8PvbzF@dpg-cnpeh47sc6pc73fraakg-a.oregon-postgres.render.com/newtodoapp";

  const pool = new Pool({
    connectionString: connectionString,

    ssl: {
      rejectUnauthorized: false,
    },
  });
  // console.log("uuuu");
  module.exports = pool;
} catch (error) {
  console.error(
    "Error occurred while creating the database connection pool:",
    error
  );
}

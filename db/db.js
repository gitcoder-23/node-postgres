/* eslint-disable consistent-return */

// const postgreSql = require('pg');

const { Pool, Client } = require('pg');
require('dotenv').config();

const Database = () => {
const pool = new Pool({
  connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.PASSWORD,
      debug: false,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionLimit: 100,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.PASSWORD,
      debug: false,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})




// class Database {
//   constructor() {
//     this.connection = postgreSql.connect({
//       connectionLimit: 100,
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       database: process.env.DB_NAME,
//       password: process.env.PASSWORD,
//       debug: false,
//     });
//   }

//   query(sql, args) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, args, (err, rows) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(rows);
//       });
//     });
//   }

//   close() {
//     return new Promise((resolve, reject) => {
//       this.connection.end((err) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve();
//       });
//     });
//   }
// }
}
module.exports = Database();

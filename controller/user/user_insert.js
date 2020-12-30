/* eslint-disable no-console */
const pool = require('../../db/db');



module.exports = {
  async addUser(req, res) {
    // const { id } = req.body;
    const { email } = req.body;
    const { username } = req.body;
    const { password } = req.body;

    // console.log(id, fname, lname, cname, address);

    let insertQuery = 'INSERT INTO users ';
    insertQuery += '(email, username, ';
    insertQuery += 'password) VALUES';
    insertQuery += ' ( $1, $2, $3)';
    console.log(insertQuery);

    try {
      pool.query(insertQuery,
        [email, username, password])
        .then((row) => {
          if (row) {
            // console.log(row);
            res.send({ status: 201, users_inserted: true });
          }
        })
        .catch((err) => {
          if (err) {
            res.send({ status: 404, users_inserted: false });
          }
        });
    } catch (errvalue) {
      console.log(errvalue);
    }
  },
};





















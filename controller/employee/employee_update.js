/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable radix */
const pool = require('../../db/db');


module.exports = {
  async putEmployee(req, res) {
    const id = parseInt(req.params.id);
    const { fname } = req.body;
    const { lname } = req.body;
    const { cname } = req.body;
    const { address } = req.body;


    const updateQuery = 'UPDATE employee SET fname = $1, lname = $2, cname = $3, address = $4 WHERE id = $5';

    console.log('++++++++++++++++++++++');
    console.log(req.body.fname, req.body.lname, req.body.cname, req.body.address, req.body.id);

    console.log('++++++++++++++++++++++');
    console.log(updateQuery);
    try {
      await pool.query(updateQuery,
        [fname, lname, cname, address, id])
        .then((row) => {
          if (row) {
            res.send({ status: 200, employee_updated: true });
          }
        })
        .catch((err) => {
          console.log('putEmployee Query Error ', err);
          res.end({ status: 406, employee_updated: false });
        });
    } catch (errUpdate) {
      console.log(errUpdate);
    }
  },
};


// let updateQuery = 'UPDATE employee SET';
// updateQuery += ' fname = $1,';
// updateQuery += ' lname = $2,';
// updateQuery += ' cname = $3,';
// updateQuery += ' address = $4';
// updateQuery += ' WHERE id= $5';







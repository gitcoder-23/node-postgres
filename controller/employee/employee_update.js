const pool = require('../../db/db');


module.exports = {
    async putEmployee(req, res){

        const { id } = req.params.id;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const cname = req.body.cname;
        const address = req.body.address;

        let updateQuery = 'UPDATE `employee` SET';
        updateQuery += ' id= ?,';
        updateQuery += ' fname= ?,';
        updateQuery += ' lname= ?,';
        updateQuery += ' cname= ?,';
        updateQuery += ' address= ?,';
        updateQuery += ' WHERE id= ?';

    console.log(updateQuery);
    pool.query(updateQuery, 
        [id, fname, lname, cname, address])
      .then((row) => {
        if (row) {
          res.send({ employee_updated: true });
        }
      })
      .catch((err) => {
        console.log('putEmployee Query Error ', err);
        res.end({ employee_updated: false });
      });
    },
};
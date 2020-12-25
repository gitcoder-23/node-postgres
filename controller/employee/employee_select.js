const pool = require('../../db/db');

module.exports = {
    async getEmployee(req, res) {
        let selectQuery = 'SELECT id, fname, lname, cname, address ';
        selectQuery += 'FROM employee';

        pool.query(selectQuery)
        .then((row) => {
            res.send(row);
        })
        .catch((err) => {
            console.log('getemployee Query Error', err);
            res.end({ fetch_employee: false }); 
        })
    },

    async singleEmployee(req, res) {
        const { id } = req.params;
    
        let selectQuery = ' SELECT id, fname, lname, cname, address';
        selectQuery += ' FROM employee WHERE id=? ';
    
        pool.query(selectQuery, [id])
          .then((row) => res.send(row))
          .catch((err) => {
            console.log('oneemployee Query Error', err);
            res.end({ fetch_one_employee: false });
          });
      },


};
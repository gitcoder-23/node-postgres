const pool = require('../../db/db');


module.exports = {
    async putEmployee(req, res){

        // const { eid } = req.params.id;
        const reqId = parseInt(req.params.id);
        const fname = req.body.fname;
        const lname = req.body.lname;
        const cname = req.body.cname;
        const address = req.body.address;
        

        let updateQuery = 'UPDATE employee SET';
        // updateQuery += ' id = $1,';
        updateQuery += ' fname = $1,';
        updateQuery += ' lname = $2,';
        updateQuery += ' cname = $3,';
        updateQuery += ' address = $4';
        updateQuery += ' WHERE id= $5';

    console.log(updateQuery);
    
    pool.query(updateQuery, 
        [reqId, fname, lname, cname, address])
      .then((row) => {
        if (row) {
          res.send({status: 200, employee_updated: true });
        }
      })
      .catch((err) => {
        console.log('putEmployee Query Error ', err);
        res.end({status: 406, employee_updated: false });
      });
    },
};
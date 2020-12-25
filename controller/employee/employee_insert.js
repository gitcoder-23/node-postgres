const pool = require('../../db/db');

module.exports = {
    async addEmployee(req, res){
        const id = req.body.id;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const cname = req.body.cname;
        const address = req.body.address;

        let insertQuery = 'INSERT INTO `employee` ';
        insertQuery += '(`id`, `fname`, `lname`, ';
        insertQuery += '`cname`, `address`) VALUES ';
        insertQuery += '( ?, ?, ?, ?, ?)';
        console.log(insertQuery);

        pool.query(insertQuery, 
            [id, fname, lname, cname, address])
            .then((row) => {
                if(row) {
                    console.log(row);
                    res.send({ employee_inserted: true });
                }
            })
            .catch((err)=> {
                if(err){
                    res.send({ employee_inserted: false });
                }
            });
    },
};
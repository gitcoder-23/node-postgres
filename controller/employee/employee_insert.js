const pool = require('../../db/db');



module.exports = {
    async addEmployee(req, res){
        const id = req.body.id;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const cname = req.body.cname;
        const address = req.body.address;

        // console.log(id, fname, lname, cname, address);

        let insertQuery = 'INSERT INTO employee ';
        insertQuery += '(id, fname, lname, ';
        insertQuery += 'cname, address) VALUES';
        insertQuery += ' ( $1, $2, $3, $4, $5)';
        // console.log(insertQuery);

        try{

        pool.query(insertQuery, 
            [id, fname, lname, cname, address])
            .then((row) => {
                if(row) {
                    // console.log(row);
                    res.send({status: 201, employee_inserted: true });
                }
            })
            .catch((err)=> {
                if(err){
                    res.send({status: 406, employee_inserted: false });
                }
            });
        }catch(errvalue){
            console.log(errvalue);
        }
    },
};



















// module.exports = {
//     async addEmployee(req, res){
//         try {
//             const { id } = req.body;
//             const { fname } = req.body;
//             const { lname } = req.body;
//             const { cname } = req.body;
//             const { address } = req.body;
//             const insertQuery = await pool.query(
//                 "INSERT INTO employee ( id, fname, lname, cname, address) VALUES (?, ?, ?, ?, ?)",
//                 [id, fname, lname, cname, address]
//             );
//             console.log(insertQuery);
//             res.json(insertQuery);
//         }catch(err){
//             console.error(err.message);
//         }
//     }
// };


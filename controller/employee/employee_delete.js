const pool = require('../../db/db');

module.exports = {
  async delEmployee(req, res) {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM `employee` WHERE id = ?';

    pool.query(deleteQuery, [id])
      .then((row) => {
        if (row) {
          res.send({ employee_deleted: true });
        }
      })
      .catch((err) => {
        res.end({ employee_deleted: false });
        throw err;
      });
  },
};

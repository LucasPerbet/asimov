const pool = require('../config/database');

async function getEleveByUserId(userId) {
    try {
        const sql = "SELECT * FROM utilisateur WHERE id_responsable = ?";
        const [rows, fields] = await pool.query(sql, [userId]);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}


module.exports = {
    getEleveByUserId

};

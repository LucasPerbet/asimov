const pool = require('../config/database');

async function getScolariteByUserId(userId) {
    try {
        const sql = "SELECT * FROM scolarite WHERE id_utilisateur = ?";
        const [rows, fields] = await pool.query(sql, [userId]);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

module.exports = {
    getScolariteByUserId
};

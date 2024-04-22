const pool = require('../config/database');

async function getEleves() {
    try {
        const sql = "SELECT * FROM utilisateur WHERE id_role = 4";
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

module.exports = {
    getEleves
};

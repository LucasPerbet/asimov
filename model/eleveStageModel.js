const pool = require('../config/database');


async function getStageById(id_utilisateur, mdp) {
    try {

        
        const sql = "SELECT * FROM stage WHERE id_utilisateur = ? AND mdp = ?";

        const [rows, fields] = await pool.query(sql, [id_utilisateur, mdp]);
        
        return rows;


    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}


module.exports = {
    getStageById

};
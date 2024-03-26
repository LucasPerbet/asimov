const pool = require('../config/database');


async function getUtilisateurByLogin(id_utilisateur, mdp) {
    try {

        
        const sql = ""

        const [rows, fields] = await pool.query(sql, []);
        
        return rows;


    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}


module.exports = {

};
const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC ENSEIGNANT SCOLARITE----------------------------------------//

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

async function getScolariteByIdEleve(eleveId) {
    try {
        const sql = "SELECT * FROM scolarite WHERE id_utilisateur = ?";
        const [rows, fields] = await pool.query(sql, [eleveId]);
        return rows;
    } catch (err) {
        console.error("Error fetching scolarite data from the database:", err);
        throw err;
    }
}

// ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC ENSEIGNANT ....----------------------------------------//

module.exports = {
    getEleveByUserId,
    getScolariteByIdEleve
};



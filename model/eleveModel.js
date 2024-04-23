const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC ELEVE SCOLARITE----------------------------------------//

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

async function getIdEnseignantReferent(userId) {
    try {
        const sql = "SELECT id_responsable FROM utilisateur WHERE id_utilisateur = ?";
        const [[{ id_responsable }]] = await pool.query(sql, [userId]);
        return id_responsable;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC ELEVE STAGE----------------------------------------//

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

// ----------------------------------------------------------------------------------------------//

module.exports = {
    getScolariteByUserId,
    getIdEnseignantReferent,
    getStageById
};

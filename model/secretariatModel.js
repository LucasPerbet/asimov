const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT SCOLARITE----------------------------------------//
async function getEleves() {
    try {
        const sql = "SELECT u.*, DATE_FORMAT(u.date_naissance, '%d/%m/%Y') AS date_naissance, c.libelle_classe FROM utilisateur AS u JOIN classe AS c ON u.id_classe = c.id_classe WHERE u.id_role = 4";
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}
async function enregistrerNotes(id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur) {
    try {
        const sql = "INSERT INTO scolarite (id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur) VALUES (?, ?, ?, ?, ?)";
        await pool.query(sql, [id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur]);
        return true;
    } catch (err) {
        console.error("Error inserting data into the database:", err);
        throw err;
    }
}

async function getEnseignants() {
    try {
        const sql = "SELECT * FROM utilisateur WHERE id_role = 2";
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

async function affecterReferent(id_responsable, id_utilisateur) {
    try {
        const sql = "UPDATE utilisateur SET id_responsable = ? WHERE id_utilisateur = ?";
        const [result] = await pool.query(sql, [id_responsable, id_utilisateur]);
        return result.affectedRows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT ....----------------------------------------//

module.exports = {
    getEleves,
    enregistrerNotes,
    getEnseignants,
    affecterReferent
};

const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT SCOLARITE----------------------------------------//
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

async function enregistrerNotes(id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur) {
    try {
        const sql = "INSERT INTO scolarite (id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur) VALUES (?, ?, ?, ?, ?)";
        await pool.query(sql, [id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur]);
    } catch (err) {
        console.error("Error inserting data into the database:", err);
        throw err;
    }
}

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT ....----------------------------------------//

module.exports = {
    getEleves,
    enregistrerNotes
};

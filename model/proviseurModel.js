const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC PROVISEUR ....----------------------------------------//
async function getAllScolarites() {
    try {
        const sql = "SELECT scolarite.id_scolarite, scolarite.estvalide, scolarite.numero_semestre, scolarite.moyenne_semestre, scolarite.annee_scolaire, classe.libelle_classe, utilisateur.nom FROM scolarite JOIN utilisateur ON scolarite.id_utilisateur = utilisateur.id_utilisateur JOIN classe ON scolarite.id_classe = classe.id_classe";

        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

async function valideNote(id_scolarite) {
    try {
        const sql = "UPDATE scolarite SET estvalide = 1 WHERE id_scolarite = ? ";

        await pool.query(sql, id_scolarite);
        return true;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}






module.exports = {
    getAllScolarites,
    valideNote

};

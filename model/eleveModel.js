const pool = require('../config/database');

// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC ELEVE SCOLARITE----------------------------------------//

async function getScolariteByUserId(userId) {
    try {
        const sql = "SELECT scolarite.id_scolarite, scolarite.estvalide, scolarite.numero_semestre, scolarite.moyenne_semestre, scolarite.annee_scolaire, classe.libelle_classe, utilisateur.nom FROM scolarite JOIN utilisateur ON scolarite.id_utilisateur = utilisateur.id_utilisateur JOIN classe ON scolarite.id_classe = classe.id_classe WHERE scolarite.id_utilisateur = ?";

        const [rows, fields] = await pool.query(sql, [userId]);
        return rows;
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

async function getIdEnseignantReferent(userId) {
    try {
        const sql = "SELECT (SELECT nom FROM utilisateur WHERE id_utilisateur = u.id_responsable) AS nom_responsable, (SELECT prenom FROM utilisateur WHERE id_utilisateur = u.id_responsable) AS prenom_responsable FROM utilisateur u WHERE u.id_utilisateur = ?";

        const [rows,fields] = await pool.query(sql, [userId]);
        return rows;
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
//---------------------------------- BLOC ELEVE PROJET----------------------------------------//

async function getProjet() {
    try {
        const sql = "SELECT projet.id_projet, projet.nom_projet, projet.description_projet, projet.date_debut, projet.date_fin, utilisateur.nom AS nom_responsable FROM projet JOIN utilisateur ON projet.id_responsableprojet = utilisateur.id_utilisateur";   

        const [rows, fields] = await pool.query(sql);
        
        return rows;

    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

module.exports = {
    getScolariteByUserId,
    getIdEnseignantReferent,
    getStageById,
    getProjet
};

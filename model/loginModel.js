const pool = require('../config/database');

async function getUtilisateurByLogin(id_utilisateur, mdp) {
    try {

        // Déclaration de la requête
     //   const sql = "SELECT * FROM utilisateur WHERE id_utilisateur = ? AND mdp = ?";
    const sql = "SELECT *, libelle_role FROM utilisateur JOIN role ON utilisateur.id_role = role.id_role WHERE id_utilisateur = ? AND mdp = ?;"


        // Exécution de la requête, et récupération du résultat dans rows
        const [rows, fields] = await pool.query(sql, [id_utilisateur, mdp]);
        return rows[0];
    } catch (err) {
        console.error("Error fetching data from the database:", err);
        throw err;
    }
}

module.exports = {
    getUtilisateurByLogin
};

// Récupération du module mySql2 pour bénéficier des promesses, ce qui est une approche plus moderne et plus flexible.
const mysql = require('mysql2/promise');
const iniparser = require('iniparser');
//Initialisation du fichier Ini
const configDB = iniparser.parseSync('./db.ini')

// Création du pool de connexions
const pool = mysql.createPool({
  host: configDB['dev']['host'],
  user: configDB['dev']['user'],
  password: configDB['dev']['password'],
  database: configDB['dev']['database'],
  waitForConnections: configDB['dev']['waitForConnections'],
  connectionLimit: configDB['dev']['connectionLimit'],
  queueLimit: configDB['dev']['queueLimit']
});

// Exporter le pool pour une utilisation dans d'autres fichiers
module.exports = pool;
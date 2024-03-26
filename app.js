const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();

// configuration de EJS comme moteur de template
app.set('view engine', 'ejs');
// configuration du répertoire des vues
//app.set('views', __dirname + '/views');

//app.set('views', path.join(__dirname, 'views'));

app.set('views', [path.join(__dirname, '/views'),path.join(__dirname, 
    '/views/eleves/'), path.join(__dirname, '/views/proviseur/'), path.join(__dirname, '/views/secretariat/'), path.join(__dirname, '/views/enseignant/'), path.join(__dirname, '/views/default/')]);

app.use(bodyParser.urlencoded({ extended: true }));


// configuration des routes
const loginRoute = require('./routes/loginRoute');
app.use('/', loginRoute);


// démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

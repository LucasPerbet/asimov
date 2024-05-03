const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module
const session = require('express-session');
const app = express();

// configuration de EJS comme moteur de template
app.set('view engine', 'ejs');
// configuration du répertoire des vues
//app.set('views', __dirname + '/views');

//app.set('views', path.join(__dirname, 'views'));

app.set('views', [path.join(__dirname, '/views'),path.join(__dirname, 
    '/views/eleves/'), path.join(__dirname, '/views/proviseur/'), path.join(__dirname, '/views/secretariat/'), path.join(__dirname, '/views/enseignant/'), path.join(__dirname, '/views/default/')]);

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/public/css'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

// configuration des routes
const loginRoute = require('./routes/loginRoute');
const logoutRoute = require('./routes/logoutRoute');
const eleveRoute = require('./routes/eleveRoute');
const enseignantRoute = require('./routes/enseignantRoute');
const proviseurRoute = require('./routes/proviseurRoute');
const secretariatRoute = require('./routes/secretariatRoute');
const apiRoute = require('./routes/apiRoute');


app.use('/', loginRoute);
app.use('/',logoutRoute);
app.use('/eleve/', eleveRoute);
app.use('/enseignant/', enseignantRoute);
app.use('/proviseur/', proviseurRoute);
app.use('/secretariat/', secretariatRoute);
app.use('/api', apiRoute);



// démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

use asimov;

INSERT INTO role (libelle_role) VALUES
('Proviseur'),
('Enseignant'),
('Secrétariat'),
('Elève');

INSERT INTO classe (id_classe,libelle_classe) VALUES
(6,'6ème'),
(5,'5ème'),
(4,'4ème'),
(3,'3ème');

INSERT INTO utilisateur (mdp, nom, prenom, date_naissance, id_classe, id_role, id_responsable) 
VALUES 
('test', 'Ines', 'David', '1990-05-15', 0, 1, 0), -- Proviseur
('test', 'Roumanet', 'David', '1990-05-15', 0, 2, 0), -- Enseignant
('test', 'Martin', 'Marie', '1992-09-20', 0, 3, 0), -- Secretariat
('test', 'Michaud', 'Pierre', '2005-03-10', 6, 4, 2), -- Eleve
('test', 'Benaboura', 'Aron', '2004-03-10', 5, 4, 2), -- Eleve
('test', 'Perbet', 'Lucas', '1997-03-10', 4, 4, 2), -- Eleve
('test', 'Ait-Lhoussaine', 'Ismael', '2001-03-10', 3, 4, 2); -- Eleve

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
('test', 'Ait-Lhoussaine', 'Ismael', '2001-03-10', 3, 4, 2), -- Eleve
('test', 'Lagache', 'François', '1985-10-20', 0, 2, 0);


INSERT INTO scolarite (id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur) VALUES
(6, 1, 16.5, '2020-2021', 4),
(6, 2, 17.8, '2020-2021', 4),
(5, 1, 14.2, '2021-2022', 4),
(5, 2, 15.9, '2021-2022', 4),
(4, 1, 18.3, '2022-2023', 4),
(4, 2, 19.7, '2022-2023', 4),
(3, 1, 20.1, '2023-2024', 4),
(3, 2, 20.5, '2023-2024', 4),
(6, 1, 14.5, '2020-2021', 5),
(6, 2, 15.8, '2020-2021', 5),
(5, 1, 12.2, '2021-2022', 5),
(5, 2, 13.9, '2021-2022', 5),
(4, 1, 16.3, '2022-2023', 5),
(4, 2, 17.7, '2022-2023', 5),
(3, 1, 18.2, '2023-2024', 5),
(3, 2, 19.5, '2023-2024', 5),
(6, 1, 12.5, '2020-2021', 6),
(6, 2, 13.8, '2020-2021', 6),
(5, 1, 10.2, '2021-2022', 6),
(5, 2, 11.9, '2021-2022', 6),
(4, 1, 14.3, '2022-2023', 6),
(4, 2, 15.7, '2022-2023', 6),
(3, 1, 16.8, '2023-2024', 6),
(3, 2, 17.5, '2023-2024', 6),
(6, 1, 18.5, '2020-2021', 7),
(6, 2, 16.8, '2020-2021', 7),
(5, 1, 14.2, '2021-2022', 7),
(5, 2, 15.9, '2021-2022', 7),
(4, 1, 19.3, '2022-2023', 7),
(4, 2, 15.7, '2022-2023', 7),
(3, 1, 16.8, '2023-2024', 7),
(3, 2, 17.5, '2023-2024', 7);

-- Insertion des données pour la table `projet`
INSERT INTO `projet` (`nom_projet`, `description_projet`, `date_debut`, `date_fin`, `id_responsableprojet`, `estvalide`) VALUES
('Projet A', 'Description du Projet A', '2024-04-01', '2024-06-30', 4, 0),
('Projet B', 'Description du Projet B', '2024-05-15', '2024-08-15', 5, 0),
('Projet C', 'Description du Projet C', '2024-03-10', '2024-05-10', 6, 0),
('Projet D', 'Description du Projet D', '2024-03-10', '2024-05-10', 7, 0);

-- Insertion des données pour la table `equipe_projet`
INSERT INTO `equipe_projet` (`id_projet`, `id_utilisateur`) VALUES
(1, 4),
(1, 5),
(2, 5),
(2, 6),
(3, 6),
(3, 7),
(4,4),
(4,7);

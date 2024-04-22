
CREATE DATABASE IF NOT EXISTS asimov;

use asimov;

DROP TABLE IF EXISTS `classe`;
CREATE TABLE IF NOT EXISTS `classe` (
  `id_classe` int NOT NULL,
  `libelle_classe` varchar(255) NOT NULL,
  PRIMARY KEY (`id_classe`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Structure de la table `equipe_projet`
--

DROP TABLE IF EXISTS `equipe_projet`;
CREATE TABLE IF NOT EXISTS `equipe_projet` (
  `id_equipe` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_projet` bigint NOT NULL,
  `id_utilisateur` bigint NOT NULL,
  PRIMARY KEY (`id_equipe`),
  KEY `idx_projet` (`id_projet`),
  KEY `idx_utilisateur` (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

DROP TABLE IF EXISTS `projet`;
CREATE TABLE IF NOT EXISTS `projet` (
  `id_projet` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom_projet` varchar(255) NOT NULL,
  `description_projet` varchar(255) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_responsableprojet` bigint NOT NULL,
  `estvalide` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_projet`),
  KEY `projet_id_responsableprojet_foreign` (`id_responsableprojet`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `recherche_stage`
--

DROP TABLE IF EXISTS `recherche_stage`;
CREATE TABLE IF NOT EXISTS `recherche_stage` (
  `id_recherche_stage` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_utilisateur` bigint NOT NULL,
  `nom_entreprise` varchar(255) NOT NULL,
  `adresse_entreprise` varchar(255) NOT NULL,
  `mail_entreprise` varchar(255) NOT NULL,
  `tel_entreprise` varchar(255) NOT NULL,
  `nb_lettre` bigint NOT NULL,
  PRIMARY KEY (`id_recherche_stage`),
  KEY `recherche_stage_id_utilisateur_foreign` (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `id_role` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle_role` varchar(255) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `role`
--
-- --------------------------------------------------------

--
-- Structure de la table `scolarite`
--

-- Structure de la table `scolarite`

DROP TABLE IF EXISTS `scolarite`;
CREATE TABLE IF NOT EXISTS `scolarite` (
  `id_scolarite` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_classe` int NOT NULL,
  `numero_semestre` bigint NOT NULL,
  `moyenne_semestre` decimal(8,2) NOT NULL,
  `annee_scolaire` varchar(255) NOT NULL,
  `id_utilisateur` bigint NOT NULL,
  PRIMARY KEY (`id_scolarite`),
  KEY `id_utilisateur` (`id_utilisateur`),
  KEY `id_classe` (`id_classe`), -- Ajout de cette ligne pour déclarer la clé étrangère `id_classe`
  CONSTRAINT `fk_id_classe` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`) -- Correction de la déclaration de la clé étrangère
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

DROP TABLE IF EXISTS `stage`;
CREATE TABLE IF NOT EXISTS `stage` (
  `id_stage` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_utilisateur` bigint NOT NULL,
  `nom_entreprise` varchar(255) NOT NULL,
  `adresse_entreprise` varchar(255) NOT NULL,
  `mail_entreprise` varchar(255) NOT NULL,
  `tel_entreprise` varchar(255) NOT NULL,
  `nb_lettre` bigint NOT NULL,
  `date_entretien` date DEFAULT NULL,
  `estvalide` tinyint(1) NOT NULL,
  `attestation` blob,
  `convention` blob,
  PRIMARY KEY (`id_stage`),
  KEY `stage_id_utilisateur_foreign` (`id_utilisateur`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id_utilisateur` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `mdp` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `date_naissance` date NOT NULL,
  `id_classe` bigint NOT NULL,
  `id_role` bigint NOT NULL,
  `id_responsable` bigint DEFAULT NULL,
  PRIMARY KEY (`id_utilisateur`),
  KEY `idx_role` (`id_role`),
  KEY `idx_responsable` (`id_responsable`),
  KEY `idx_classe` (`id_classe`)
) ENGINE=MyISAM AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

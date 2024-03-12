CREATE DATABASE IF NOT EXISTS asimov;

USE asimov;

CREATE TABLE `Projet`(
    `id_projet` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nom_projet` VARCHAR(255) NOT NULL,
    `description_projet` VARCHAR(255) NOT NULL,
    `date_debut` DATE NOT NULL,
    `date_fin` DATE NOT NULL,
    `id_responsableprojet` BIGINT NOT NULL,
    `estvalide` TINYINT(1) NOT NULL
);
CREATE TABLE `Recherche_Stage`(
    `id_recherche_stage` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_utilisateur` BIGINT NOT NULL,
    `nom_entreprise` VARCHAR(255) NOT NULL,
    `adresse_entreprise` VARCHAR(255) NOT NULL,
    `mail_entreprise` VARCHAR(255) NOT NULL,
    `tel_entreprise` VARCHAR(255) NOT NULL,
    `nb_lettre` BIGINT NOT NULL
);
CREATE TABLE `Scolarite`(
    `id_scolarite` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nom_classe` VARCHAR(255) NOT NULL,
    `numero_semestre` BIGINT NOT NULL,
    `moyenne_semestre` DECIMAL(8, 2) NOT NULL,
    `annee_scolaire` DATE NOT NULL,
    `id_utilisateur` BIGINT NOT NULL,
    INDEX(`id_utilisateur`)
);
CREATE TABLE `Utilisateur`(
    `id_utilisateur` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `mdp` VARCHAR(255) NOT NULL,
    `nom` VARCHAR(255) NOT NULL,
    `prenom` VARCHAR(255) NOT NULL,
    `date_naissance` DATE NOT NULL,
    `classe_actuelle` VARCHAR(255) NULL,
    `id_role` BIGINT NOT NULL,
    `id_responsable` BIGINT NULL,
    INDEX(`id_role`),
    INDEX(`id_responsable`)
);
CREATE TABLE `Stage`(
    `id_stage` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_utilisateur` BIGINT NOT NULL,
    `nom_entreprise` VARCHAR(255) NOT NULL,
    `adresse_entreprise` VARCHAR(255) NOT NULL,
    `mail_entreprise` VARCHAR(255) NOT NULL,
    `tel_entreprise` VARCHAR(255) NOT NULL,
    `nb_lettre` BIGINT NOT NULL,
    `date_entretien` DATE NULL,
    `estvalide` TINYINT(1) NOT NULL,
    `attestation` BLOB NULL,
    `convention` BLOB NULL
);
CREATE TABLE `Role`(
    `id_role` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `libelle_role` VARCHAR(255) NOT NULL
);
CREATE TABLE `Equipe_Projet`(
    `id_equipe` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_projet` BIGINT NOT NULL,
    `id_utilisateur` BIGINT NOT NULL,
    INDEX(`id_projet`),
    INDEX(`id_utilisateur`)
);
ALTER TABLE
    `Utilisateur` ADD CONSTRAINT `utilisateur_id_responsable_foreign` FOREIGN KEY(`id_responsable`) REFERENCES `Utilisateur`(`id_utilisateur`);
ALTER TABLE
    `Scolarite` ADD CONSTRAINT `scolarite_id_utilisateur_foreign` FOREIGN KEY(`id_utilisateur`) REFERENCES `Utilisateur`(`id_utilisateur`);
ALTER TABLE
    `Equipe_Projet` ADD CONSTRAINT `equipe_projet_id_utilisateur_foreign` FOREIGN KEY(`id_utilisateur`) REFERENCES `Utilisateur`(`id_utilisateur`);
ALTER TABLE
    `Stage` ADD CONSTRAINT `stage_id_utilisateur_foreign` FOREIGN KEY(`id_utilisateur`) REFERENCES `Utilisateur`(`id_utilisateur`);
ALTER TABLE
    `Equipe_Projet` ADD CONSTRAINT `equipe_projet_id_projet_foreign` FOREIGN KEY(`id_projet`) REFERENCES `Projet`(`id_projet`);
ALTER TABLE
    `Utilisateur` ADD CONSTRAINT `utilisateur_id_role_foreign` FOREIGN KEY(`id_role`) REFERENCES `Role`(`id_role`);
ALTER TABLE
    `Recherche_Stage` ADD CONSTRAINT `recherche_stage_id_utilisateur_foreign` FOREIGN KEY(`id_utilisateur`) REFERENCES `Utilisateur`(`id_utilisateur`);
ALTER TABLE
    `Projet` ADD CONSTRAINT `projet_id_responsableprojet_foreign` FOREIGN KEY(`id_responsableprojet`) REFERENCES `Utilisateur`(`id_utilisateur`);

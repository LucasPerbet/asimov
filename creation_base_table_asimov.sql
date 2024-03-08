CREATE DATABASE IF NOT EXISTS asimov

CREATE TABLE `Eleve` (
  `id_eleve` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(255) NOT NULL,
  `prenom` VARCHAR(255) NOT NULL,
  `date_naissance` DATE NOT NULL,
  `classe_actuelle` VARCHAR(255) NOT NULL
);

CREATE TABLE `Projet` (
  `id_projet` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom_projet` VARCHAR(255) NOT NULL,
  `description_projet` VARCHAR(255) NOT NULL,
  `date_debut` DATE NOT NULL,
  `date_fin` DATE NOT NULL,
  `id_responsableprojet` BIGINT UNSIGNED NOT NULL
);

CREATE TABLE `Scolarite` (
  `id_scolarite` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom_classe` VARCHAR(255) NOT NULL,
  `numero_semestre` BIGINT NOT NULL,
  `moyenne_semestre` FLOAT NOT NULL,
  `annee_scolaire` DATE NOT NULL
);

CREATE TABLE `Personnel` (
  `id_personnel` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(255) NOT NULL,
  `prenom` VARCHAR(255) NOT NULL
);

CREATE TABLE `Recherche_Stage` (
  `id_recherche_stage` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_eleve` BIGINT UNSigned NOT NULL,
  `nom_entreprise` VARCHAR(255) NOT NULL,
  `mail_entreprise` VARCHAR(255) NOT NULL,
  `tel_entreprise` VARCHAR(255) NOT NULL,
  `nb_lettre` BIGINT NOT NULL,
  `date_entretien` DATE NULL,
  `estsigne` TINYINT(1) NOT NULL,
  `attestation` BLOB NULL,
  `convention` BLOB NULL
);

CREATE TABLE `Role` (
  `id_role` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `libelle_role` VARCHAR(255) NOT NULL
);

CREATE TABLE `Equipe_Projet` (
  `id_equipe` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_projet` BIGINT UNSIGNED NOT NULL,
  `id_eleve` BIGINT UNSIGNED NOT NULL
);


ALTER TABLE `Projet`
  ADD CONSTRAINT `projet_id_responsableprojet_foreign`
  FOREIGN KEY (`id_responsableprojet`) REFERENCES `Eleve`(`id_eleve`);

ALTER TABLE `Eleve`
  ADD CONSTRAINT `eleve_id_responsableprof_foreign`
  FOREIGN KEY (`id_responsableprof`) REFERENCES `Personnel`(`id_personnel`);

ALTER TABLE `Equipe_Projet`
  ADD CONSTRAINT `equipe_projet_id_projet_foreign`
  FOREIGN KEY (`id_projet`) REFERENCES `Projet`(`id_projet`);

ALTER TABLE `Scolarite`
  ADD CONSTRAINT `scolarite_id_eleve_foreign`
  FOREIGN KEY (`id_eleve`) REFERENCES `Eleve`(`id_eleve`);

ALTER TABLE `Equipe_Projet`
  ADD CONSTRAINT `equipe_projet_id_eleve_foreign`
  FOREIGN KEY (`id_eleve`) REFERENCES `Eleve`(`id_eleve`);

ALTER TABLE `Personnel`
  ADD CONSTRAINT `personnel_id_role_foreign`
  FOREIGN KEY (`id_role`) REFERENCES `Role`(`id_role`);

ALTER TABLE `Recherche_Stage`
  ADD CONSTRAINT `recherche_stage_id_eleve_foreign`
  FOREIGN KEY (`id_eleve`) REFERENCES `Eleve`(`id_eleve`);

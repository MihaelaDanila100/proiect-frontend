--TABELE

--tabelul skills
CREATE TABLE `jobsdb`.`skills` (
  `id_skill` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id_skill`),
  UNIQUE INDEX `id_candidate_UNIQUE` (`id_skill` ASC) VISIBLE);

INSERT INTO `jobsdb`.`skills` (`name`) VALUES ('Organising');
INSERT INTO `jobsdb`.`skills` (`name`) VALUES ('C++');
INSERT INTO `jobsdb`.`skills` (`name`) VALUES ('Angular');
INSERT INTO `jobsdb`.`skills` (`name`) VALUES ('NodeJS');

--tabelul locations
CREATE TABLE `jobsdb`.`locations` (
  `id_location` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  PRIMARY KEY (`id_location`),
  UNIQUE INDEX `id_location_UNIQUE` (`id_location` ASC) VISIBLE);

INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Remote');
INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Bucuresti');
INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Iasi');
INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Timisoare');
INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Cluj-Napoca');
INSERT INTO `jobsdb`.`locations` (`name`) VALUES ('Constanta');

--tabelul candidates
CREATE TABLE `jobsdb`.`candidates` (
  `id_candidate` BIGINT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NULL,
  `password` VARCHAR(1000) NULL,
  `mail` VARCHAR(100) NULL,
  `fullName` VARCHAR(100) NULL,
  PRIMARY KEY (`id_candidate`),
  UNIQUE INDEX `id_candidate_UNIQUE` (`id_candidate` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);

INSERT INTO `jobsdb`.`candidates` (`username`, `password`, `mail`, `fullName`) VALUES ('ionpop', 'ionpop', 'ionpop@yahoo.com', 'Ion Popescu');

--tabelul recruiters
CREATE TABLE `jobsdb`.`recruiters` (
  `id_recruiter` BIGINT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `password` VARCHAR(1000) NULL,
  `mail` VARCHAR(100) NULL,
  `fullname` VARCHAR(1000) NULL,
  `company` VARCHAR(100) NULL,
  PRIMARY KEY (`id_recruiter`),
  UNIQUE INDEX `id_recruiter_UNIQUE` (`id_recruiter` ASC) VISIBLE);

INSERT INTO `jobsdb`.`recruiters` (`username`, `password`, `mail`, `fullname`, `company`) VALUES ('vasigeorge', 'vasigeorge', 'vas@yahoo.com', 'Vasilescu George', 'Compania 1');

--tabelul jobs
CREATE TABLE `jobsdb`.`job` (
  `id_job` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NULL,
  `description` VARCHAR(1000) NULL,
  `company` VARCHAR(100) NULL,
  `end_date` DATETIME NULL,
  `location_id` BIGINT NULL,
  `domain` VARCHAR(1000) NULL,
  `type` VARCHAR(45) NULL,
  `createdAt` DATETIME NULL,
  `experience` VARCHAR(100) NULL,
  `requirments` VARCHAR(1000) NULL,
  `created_by` BIGINT NULL,
  PRIMARY KEY (`id_job`),
  UNIQUE INDEX `id_job_UNIQUE` (`id_job` ASC) VISIBLE,
  INDEX `id_location_candidate_idx` (`location_id` ASC) VISIBLE,
  INDEX `id_recruiter_job_idx` (`created_by` ASC) VISIBLE,
  CONSTRAINT `id_location_job`
    FOREIGN KEY (`location_id`)
    REFERENCES `jobsdb`.`locations` (`id_location`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_recruiter_job`
    FOREIGN KEY (`created_by`)
    REFERENCES `jobsdb`.`recruiters` (`id_recruiter`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

--tabelul benefits
CREATE TABLE `jobsdb`.`benefits` (
  `id_benefit` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(1000) NULL,
  PRIMARY KEY (`id_benefit`),
  UNIQUE INDEX `id_benefit_UNIQUE` (`id_benefit` ASC) VISIBLE);

INSERT INTO `jobsdb`.`benefits` (`name`) VALUES ('Asigurare medicala');
INSERT INTO `jobsdb`.`benefits` (`name`) VALUES ('Tichete de vacanta');


--TABELE ASOCIATIVE

--tabelul candidate_skills
CREATE TABLE `jobsdb`.`candidate_skills` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `candidate_id` BIGINT NOT NULL,
  `skill_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_candidate_skill_idx` (`candidate_id` ASC) VISIBLE,
  INDEX `id_skill_candidate_idx` (`skill_id` ASC) VISIBLE,
  CONSTRAINT `id_candidate_skill`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `jobsdb`.`candidates` (`id_candidate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_skill_candidate`
    FOREIGN KEY (`skill_id`)
    REFERENCES `jobsdb`.`skills` (`id_skill`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

INSERT INTO `jobsdb`.`candidate_skills` (`candidate_id`, `skill_id`) VALUES ('1', '1');
INSERT INTO `jobsdb`.`candidate_skills` (`candidate_id`, `skill_id`) VALUES ('1', '2');
INSERT INTO `jobsdb`.`candidate_skills` (`candidate_id`, `skill_id`) VALUES ('1', '3');

--tabelul jobs_benefits
CREATE TABLE `jobsdb`.`jobs_benefits` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `job_id` BIGINT NOT NULL,
  `benefit_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_job_benefit_idx` (`job_id` ASC) VISIBLE,
  INDEX `id_benefit_job_idx` (`benefit_id` ASC) VISIBLE,
  CONSTRAINT `id_job_benefit`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobsdb`.`job` (`id_job`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_benefit_job`
    FOREIGN KEY (`benefit_id`)
    REFERENCES `jobsdb`.`benefits` (`id_benefit`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

--tabelul job_skills
CREATE TABLE `jobsdb`.`jobs_skills` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `job_id` BIGINT NOT NULL,
  `skill_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_job_skill_idx` (`job_id` ASC) VISIBLE,
  INDEX `id_skill_job_idx` (`skill_id` ASC) VISIBLE,
  CONSTRAINT `id_job_skill`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobsdb`.`job` (`id_job`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_skill_job`
    FOREIGN KEY (`skill_id`)
    REFERENCES `jobsdb`.`skills` (`id_skill`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

--tabelul candidates_jobs
CREATE TABLE `jobsdb`.`candidates_jobs` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `candidate_id` BIGINT NOT NULL,
  `job_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_candidate_job_idx` (`candidate_id` ASC) VISIBLE,
  INDEX `id_job_candidate_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `id_candidate_job`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `jobsdb`.`candidates` (`id_candidate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_job_candidate`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobsdb`.`job` (`id_job`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

--tabelul bookmarks

CREATE TABLE `jobsdb`.`bookmarks` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `job_id` BIGINT NOT NULL,
  `candidate_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `id_job_bookmark_idx` (`job_id` ASC) VISIBLE,
  INDEX `id_candidate_bookmark_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `id_job_bookmark`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobsdb`.`job` (`id_job`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_candidate_bookmark`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `jobsdb`.`candidates` (`id_candidate`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
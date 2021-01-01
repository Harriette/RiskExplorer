DROP DATABASE IF EXISTS riskexplorer;
CREATE DATABASE riskexplorer;
USE riskexplorer;

CREATE TABLE IF NOT EXISTS companies (
  company_ID      INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  name            VARCHAR(128)  NOT NULL DEFAULT '',
  PRIMARY KEY     (company_ID)
);

CREATE TABLE IF NOT EXISTS departments (
  department_ID   INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  name            VARCHAR(64)   NOT NULL DEFAULT '',
  PRIMARY KEY     (department_ID)
);

CREATE TABLE IF NOT EXISTS profiles (
  profile_ID      INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  first_name      VARCHAR(128)  NOT NULL DEFAULT '',
  last_name       VARCHAR(128)  NOT NULL DEFAULT '',
  company_ID	    INT UNSIGNED,
  department_ID	  INT UNSIGNED,
  picture_path	  VARCHAR(512),

  PRIMARY KEY     (profile_ID),
  INDEX           (first_name, last_name),

  CONSTRAINT FOREIGN KEY (company_ID)
    REFERENCES companies (company_ID),
  CONSTRAINT FOREIGN KEY (department_ID)
    REFERENCES departments (department_ID)
);

CREATE TABLE IF NOT EXISTS users (
  user_ID      	  INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  user_name       VARCHAR(128)  NOT NULL DEFAULT '',
  password_hash   VARCHAR(512)  NOT NULL DEFAULT '',
  profile_ID		  INT UNSIGNED,

  PRIMARY KEY     (user_ID),
  INDEX           (user_name),

  CONSTRAINT FOREIGN KEY (profile_ID)
  REFERENCES profiles (profile_ID)
);

CREATE TABLE IF NOT EXISTS processes (
  process_ID      INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  name            VARCHAR(64)   NOT NULL DEFAULT '',
  PRIMARY KEY     (process_ID)
);

CREATE TABLE IF NOT EXISTS risks (
  risk_ID           INT UNSIGNED NOT NULL AUTO_INCREMENT,
  id                VARCHAR(10)   NOT NULL DEFAULT '',
  name              VARCHAR(128)   NOT NULL DEFAULT '',
  description       VARCHAR(1024),
  prob_rating       TINYINT,
  severity_rating   TINYINT,
  reputation_rating TINYINT,
  rag_rating        TINYINT,
  loss              BOOLEAN       DEFAULT 0,
  risk_level        TINYINT,
  company_ID        INT UNSIGNED  NOT NULL,
  department_ID     INT UNSIGNED,
  process_ID        INT UNSIGNED,
  created_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_by        VARCHAR(50),
  modified_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified_by       VARCHAR(50),
  is_deleted        BOOLEAN DEFAULT 0,

  PRIMARY KEY       (risk_ID),
  INDEX             (name),

  CONSTRAINT FOREIGN KEY (company_ID)
    REFERENCES companies (company_ID),
  CONSTRAINT FOREIGN KEY (department_ID)
    REFERENCES departments (department_ID),
  CONSTRAINT FOREIGN KEY (process_ID)
    REFERENCES processes (process_ID)
);


CREATE TABLE IF NOT EXISTS risklinks (
  risklink_ID     INT UNSIGNED   NOT NULL AUTO_INCREMENT,
  riskfrom_ID     INT UNSIGNED   NOT NULL,
  riskto_ID       INT UNSIGNED   NOT NULL,

  PRIMARY KEY     (risklink_ID),

  CONSTRAINT FOREIGN KEY (riskfrom_ID)
    REFERENCES risks (risk_ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE,

  CONSTRAINT FOREIGN KEY (riskto_ID)
    REFERENCES risks (risk_ID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

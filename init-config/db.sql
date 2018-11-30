CREATE SCHEMA macgyver_it;

USE  macgyver_it;


CREATE TABLE user
(
  id INT auto_increment PRIMARY KEY,
  name     VARCHAR(50)            NOT NULL,
  login    VARCHAR(20)            NOT NULL,
  password VARCHAR(50)            NOT NULL,
  active   tinyint(1) DEFAULT '1' NOT NULL
);

INSERT INTO `macgyver_it`.`user` (`name`, `login`, `password`, `active`) VALUES ('admin', 'admin', 'admin', true);


CREATE TABLE tip
(
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(200)           NOT NULL,
  description text                   NOT NULL,
  link VARCHAR(200)           NOT NULL,
  category VARCHAR(200)           NOT NULL,
  active tinyint(1) DEFAULT '1' NOT NULL
);






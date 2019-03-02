### Schema

CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burger (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burgername VARCHAR(20) NULL,
  devoured BOOLEAN
  );
DROP DATABASE IF EXISTS burgerDB;

CREATE DATABASE burgerDB;

USE burgerDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burgername VARCHAR(20) NULL,
  devoured BOOLEAN,
  quantity INT NULL
  );

INSERT INTO products (burgername, devoured, quantity)
VALUES (" ", , 100);
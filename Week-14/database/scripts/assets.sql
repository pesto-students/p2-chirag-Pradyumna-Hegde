CREATE DATABASE  IF NOT EXISTS wealth_maintainer;
USE wealth_maintainer;
DROP TABLE IF EXISTS assets;
CREATE TABLE IF NOT EXISTS assets
(
    asset_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name CHAR(20) NOT NULL
);


INSERT INTO assets VALUES
(DEFAULT, 'cash'),
(DEFAULT, 'fixed_deposits'),
(DEFAULT, 'rent'),
(DEFAULT, 'jewellery'),
(DEFAULT, 'vehicle');


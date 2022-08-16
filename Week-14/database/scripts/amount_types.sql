CREATE DATABASE  IF NOT EXISTS wealth;
USE wealth;
DROP TABLE IF EXISTS amount_types;
CREATE TABLE IF NOT EXISTS amount_types
(
    amount_type_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label CHAR(20) NOT NULL
);

INSERT INTO amount_types VALUES
(1, 'income'),
(2, 'expenditure');

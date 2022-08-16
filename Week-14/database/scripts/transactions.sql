CREATE DATABASE  IF NOT EXISTS wealth;
USE wealth;
DROP TABLE IF EXISTS transactions;
CREATE TABLE IF NOT EXISTS transactions
(
    transaction_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    customer_id INT FOREIGN KEY NOT NULL,
    assit_id INT FOREIGN KEY NOT NULL,
    amount_type_id INT FOREIGN KEY NOT NULL,
    amount INT NOT NULL,
    date DATE NOT NULL
);

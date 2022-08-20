CREATE DATABASE  IF NOT EXISTS wealth;
USE wealth;



-- //customers table
DROP TABLE IF EXISTS customers;
CREATE TABLE IF NOT EXISTS customers
(
    customer_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    password CHAR(20) NOT NULL,
);


INSERT INTO customers
VALUES (DEFAULT, 'Pradyumna', 'Hegde', 'pradyumna.hegde@gmail.com', '1asdfgf'),
       (DEFAULT, 'Sagar', 'Khatri', 'sagar.khatri@gmail.com', ';lkjhj2'),
       (DEFAULT, 'Pradeep', 'DM', 'pradeep.dm@gmail.com', '3qwertr'),
       (DEFAULT, 'Samrat', 'RM', 'samrat.rm@gmail.com', 'poiuyu4'),
       (DEFAULT, 'Ashish', 'Nikumbh', 'ashish.nikumbh@gmail.com', '5zxcvbv'),
       (DEFAULT, 'Nikhil', 'Jadhav', 'nikhil.jadhav@gmail.com', '?><mnm6');

------------------------------------------------------------------------------------------

-- //assets table
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

------------------------------------------------------------------------------------------


-- //amount_types table
DROP TABLE IF EXISTS amount_types;
CREATE TABLE IF NOT EXISTS amount_types
(
    amount_type_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label CHAR(20) NOT NULL
);

INSERT INTO amount_types VALUES
(1, 'income'),
(2, 'expenditure');

------------------------------------------------------------------------------------------

-- //transactions table
DROP TABLE IF EXISTS transactions;
CREATE TABLE IF NOT EXISTS transactions
(
    transaction_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    customer_id INT FOREIGN KEY NOT NULL,
    asset_id INT FOREIGN KEY NOT NULL,
    amount_type_id INT FOREIGN KEY NOT NULL,
    amount INT NOT NULL,
    date DATE NOT NULL
);

INSERT INTO transactions VALUES (DEFAULT, 1, 1, 1, 5000, "2022-08-21");










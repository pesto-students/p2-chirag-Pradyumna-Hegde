CREATE DATABASE  IF NOT EXISTS wealth;
USE wealth;
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


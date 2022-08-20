const mysql = require("mysql");

const database_credentials = {
  host: `localhost`,
  user: `root`,
  password: `ui(Mysql)xu2()`,
  database: `wealth`,
};

//get connected to the database.
const connect = (database_credentials) => {
  const connection = mysql.createConnection(database_credentials);
  connection.connect((error) => {
    if (error) console.log(`error detected!`);
    console.log(`connected to database`);
  });
  return connection;
};

//get disconnected from the database.
const getDisconnect = (connection) => {
  connection.end((error) => {
    if (error) console.log(`Error detected!`);
    console.log(`Connection ended and querying of database isn't possible.`);
  });
};

//authorizing the user --logIn authentication.
const getAuthorize = (email, callback) => {
  const connection = connect(database_credentials);
  const sql = `SELECT password FROM customers WHERE email="${email}";`;

  connection.query(sql, (err, results, fields) => {
    if (err) console.log(err.message);
    callback(results[0]);
  });
  getDisconnect(connection);
};

//adding new user to the database.
const addCustomer = (object, callback) => {
  const { fname, lname, email, password } = object;
  const connection = connect(database_credentials);
  const sql = `INSERT INTO customers VALUES (DEFAULT, "${fname}", "${lname}", "${email}", "${password}")`;

  connection.query(sql, (err, results, fields) => {
    if (err) console.log(`error detected...`);
    console.log(results);
    callback(results);
  });
  getDisconnect(connection);
};

// getting transactions from the user
const getTransactions = (userName, callback) => {
  const connection = connect(database_credentials);
  const sql = `SELECT transaction_id, c.first_name AS name, a.name AS type, a_t.label, amount, date
  FROM transactions t
  JOIN assets a
    ON t.asset_id = a.asset_id
  JOIN amount_types a_t
    ON t.amount_type_id = a_t.amount_type_id;`;

  connection.query(sql, (err, results, fields) => {
    if (err) console.log(`error detected...`);
    callback(results);
  });
  getDisconnect(connection);
};

// adding a transaction from the user
const addTransaction = (object, callback) => {
  const { transaction_id, asset_name, amount_label, amount, date } = object;
  const connection = connect(database_credentials);
  const sql = `SELECT transaction_id, c.first_name AS name, a.name AS type, a_t.label, amount, date
  FROM transactions t
  JOIN assets a
    ON t.asset_id = a.asset_id
  JOIN amount_types a_t
    ON t.amount_type_id = a_t.amount_type_id;`;

  connection.query(sql, (err, results, fields) => {
    if (err) console.log(`errors detected...`);
    callback(results);
  });
  getDisconnect(connection);
};

module.exports = { getAuthorize, addCustomer, getTransactions, addTransaction };

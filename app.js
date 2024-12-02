const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mund!!');
});

module.exports = app;

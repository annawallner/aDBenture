const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const profile = require('./profile');

const port = process.env.PORT || 3000;

const app = express()
  .use(cors())
  .use(bodyParser.json());

app.use('/', profile);

app.listen(port, () => {
  console.log(`aDBentureServer is listening on port ${port}`);
});

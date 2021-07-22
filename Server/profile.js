const express = require('express');             //REST API
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();
module.exports = router;


/* connect to loki-db and test connection*/
let loki = new sqlite3.Database('./loki.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.log("aDBentureServer says: Connection to Loki-Database failed! Error: " + err.message);
  }
  else {
    loki.all("SELECT Vorname FROM Person WHERE Geschlecht = 'test'", (error, rows) => {
      rows.forEach((row) => {
        if (row.Vorname === "test") {
          console.log("aDBentureServer says: Connected to Loki-DB!")
        };
      })
    });
  }
});

//send user solution to loki
router.post('/query', function(req, res){
  let expected = req.body.expected;
  let counter = 0;
  loki.all(req.body.query, function (error, rows){
    rows.forEach((row) => {
      counter++;
    })
    if (counter === expected){
      res.status(200).send({solution: true});
    }
    else {
      res.status(200).send({solution: false});
    }
  })
})

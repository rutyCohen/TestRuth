const express = require('express')
const app = express()
const fs = require('fs');
const crypto = require('crypto');
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(function (req, res) {
  const hash = crypto.createHash('sha256').update(JSON.stringify(req.body)).digest('hex');;
  res.send(JSON.stringify(hash));
  next();
})

app.get('/', (req, res) => {
res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send(req.body)
  });


app.listen(5000)
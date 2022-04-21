const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.APP_PORT;

app.get('/', async (req, res) => res.sendStatus(200));

app.get('/microservice-two', (req, res) => {
  res.json({
    resource: 'microservice-two',
    data: {
      fieldOne: "example 2",
      fieldTwo: "example"
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`microservice-two is listening on ${port}`)
});

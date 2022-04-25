const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.APP_PORT;

app.get('/', async (req, res) => res.sendStatus(200));

app.get('/microservice-one', async (req, res) => {
  try {
    // microservice-one fetches data from microservice-two
    let { data } = await axios.get(process.env.SERVICE_TWO_URL);

    res.json({
      resource: 'MICROSERVICE-ONE',
      data: {
        fieldOne: "valueOne",
        fieldTwo: "valueTwo",
        microserviceTwo: data
      }
    });

  } catch (e) {
    console.log(e);
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`microservice-one is listening on ${port}`)
});

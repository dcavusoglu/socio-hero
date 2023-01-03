const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios');


const port = 5050;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.get('/', (req,res) => {    res.json('hi')})





const start = () => {
  try {
    app.listen(port, (req,res) => {
      console.log('you are on port', port);
    })
  } catch (err) {
    console.log(err);
  }
}

start();

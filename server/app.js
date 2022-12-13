const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const cors = require('cors');
// const router = require('./routes/routes');
const axios = require('axios');

const router = require('./routes/routes');

const port = 5050;
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}))

// app.use(cors())

app.get('/', (req,res) => {    res.json('hi')})

// app.get('/convert', (req,res) => {


//     const options = {
//         method: 'GET',
//         url: 'https://philosophyapi.pythonanywhere.com/api/schools/?page=2',
//         headers: {
//             // 'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
//             // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
//             'Content-Type': 'application/json'
//         }
//     }

//     axios.request(options).then((response) => {
//         res.json(response.data)
//     }).catch((error) => {
//         console.error(error)
//     })
// })

app.use('/convert', router)

app.use('/', router)




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

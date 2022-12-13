const express = require('express');
const axios = require('axios');

const router = express.Router();



// const {getAllData} = require('../controller/controller')

// router.route('/').get(getAllData);

const schoolsPage2 = (req,res) => {
  const options = {
    method: 'GET',
    url: 'https://philosophyapi.pythonanywhere.com/api/ideas',
    headers: {
      // 'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
      // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000/'
    }
  }

  axios.request(options).then((response) => {
    res.json(response.data)
    }).catch((error) => {
      console.error(error)
    })
  }

  router.route('/convert').get(schoolsPage2);





module.exports = router;

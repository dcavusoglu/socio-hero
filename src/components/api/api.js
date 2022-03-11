import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Api = () => {
  const [phis, setPhi] = useState('');
  const url= 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

  useEffect(() => {
    axios.get(url)
    .then(response => setPhi(response.data)
      ).catch(err => {
      console.log(err);
    })
  }, []);
}

export default Api

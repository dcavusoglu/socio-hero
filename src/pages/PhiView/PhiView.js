import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './PhiView.css';
import axios from 'axios';

const PhiView = () => {
  const url = 'http https://philosophyapi.herokuapp.com/api/philosophers/1/';
  const [phi, setPhi] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
      setPhi(response.data)
    })
  }, [url])


  return (
    <div className='phiview-cont'>
      <header className='phi-view-links-cont'>
        <Link to="../Dashboard/Dashboard" className='phi-view-links'>My philosophers</Link>
        <Link to="../ListX/ListX" className='phi-view-links'>Back to List {}</Link>
      </header>
      <div className='phi-detail'>
        <img className='phi-img' src="" alt="" />
        <div className='phi-text'>
          <h3>Name:</h3>
          <h3>Date of Birth:</h3>
          <h3>Date of Death:</h3>
          <h3>Nationality:</h3>
          <h3>Schools:</h3>
          <h3>Books:</h3>
          <h2>Ideas</h2>
        </div>
      </div>
    </div>
  )
}

export default PhiView

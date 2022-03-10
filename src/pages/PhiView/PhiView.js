import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './PhiView.css';
import axios from 'axios';



const PhiView = () => {
  const [phis, setPhi] = useState('');
  const url= 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

    useEffect(() => {
      axios.get(url)
      .then(response => setPhi(response.data)
        ).catch(err => {
        console.log(err);
      })
    }, []);

    console.log('Phi:', phis);

  return (
    <div className='phiview-cont'>
      <header className='phi-view-links-cont'>
        <Link to="../Dashboard/Dashboard" className='phi-view-links'>My philosophers</Link>
        <Link to="../ListX/ListX" className='phi-view-links'>Back to List {}</Link>
      </header>
      <div className='phi-detail'>
        <img className='phi-img' src="" alt="" />
        <div className='phi-text'>
          {phis.map(phi=> {
            return (
              <div key={phi.id}>
                <h2>{phi.name}</h2>
                <h2>{phi.price} {phi.priceCurrency}</h2>
                <img
                  src={phi.imageUrl}
                  alt={phi.name}
                  style={{ width: "200px" }}
                />
              </div>
            )
          } )}
        </div>
      </div>
    </div>
  )
}

export default PhiView

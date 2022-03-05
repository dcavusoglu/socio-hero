import React from 'react'
import { Link } from 'react-router-dom';

const PhiView = () => {
  return (
    <div>
      <header className='phi-view-back-links'>
        <Link to="../Dashboard/Dashboard">My philosophers</Link>
        <Link to="../ListX/ListX">Back to List {}</Link>
      </header>
    </div>
  )
}

export default PhiView

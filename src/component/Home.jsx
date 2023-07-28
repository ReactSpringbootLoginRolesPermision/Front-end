import React from 'react'

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='container'>
      <Link to="/login" type="button" className="btn btn-primary">Login</Link>
        <Link to="/signup" type="button" className="btn btn-primary">register</Link>
    </div>
  )
}

export default Home

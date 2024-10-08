import React from 'react'
import { Link } from 'react-router-dom'

const ComodinPage = () => {
  return (
    <div className="not-found-container">
      <h1 className='h1_comodin'>404</h1>
        <p className='p_comodin'>Oops! La página que buscas no existe.</p>
      <Link to="/" className="home-link">Volver al inicio</Link>
  </div>
  )
}

export default ComodinPage
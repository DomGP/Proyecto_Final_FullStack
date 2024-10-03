import React from 'react'
import Banner from '../components/Banner'
import CardGame from '../components/CardGame'

const HomePage = () => {
  return (
    <div>
      <div className='banner py-5'>
        <Banner/>
      </div>
      <div className='cardGame'>
        <CardGame/>
      </div>
    </div>
    
  )
}

export default HomePage
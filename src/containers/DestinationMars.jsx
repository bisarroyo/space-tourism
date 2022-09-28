import StatisticItem from '../components/StatisticItem'
import DestinationImage from '../components/DestinationImage'
import mars from '../../src/assets/destination/image-mars.png'

import React from 'react'

const DestinationMars = ({ submenu }) => {
  return (
    <div className='destination-container'>
      <DestinationImage image={mars} alt='Moon Image' />
      <div className='destination-text'>
        {submenu}
        <h2>MARS</h2>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </p>
        <div className='detination-info'>
          <div>
            <StatisticItem title='AVG. DISTANCE' info='225 MIL. KM' />
          </div>
          <div className='destination-info-2'>
            <StatisticItem title='EST. TRAVEL TIME' info='9 MONTHS' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationMars

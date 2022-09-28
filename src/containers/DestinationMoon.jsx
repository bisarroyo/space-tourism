import StatisticItem from '../components/StatisticItem'
import DestinationImage from '../components/DestinationImage'
import moon from '../../src/assets/destination/image-moon.png'

import React from 'react'

const DestinationMoon = ({ submenu }) => {
  return (
    <div className='destination-container'>
      <DestinationImage image={moon} alt='Moon Image' />
      <div className='destination-text'>
        {submenu}
        <h2>MOON</h2>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className='detination-info'>
          <div>
            <StatisticItem title='AVG. DISTANCE' info='384,400 km' />
          </div>
          <div className='destination-info-2'>
            <StatisticItem title='EST. TRAVEL TIME' info='3 DAYS' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationMoon

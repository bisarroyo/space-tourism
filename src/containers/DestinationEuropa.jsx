import StatisticItem from '../components/StatisticItem'
import DestinationImage from '../components/DestinationImage'
import europa from '../../src/assets/destination/image-europa.png'

import React from 'react'

const DestinationEuropa = () => {
  return (
    <div className='destination-container'>
      <DestinationImage image={europa} alt='Moon Image' />
      <div className='destination-text'>
        <h2>EUROPA</h2>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <div className='detination-info'>
          <div>
            <StatisticItem title='AVG. DISTANCE' info='628 MIL. KM' />
          </div>
          <div className='destination-info-2'>
            <StatisticItem title='EST. TRAVEL TIME' info='3 YEARS' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationEuropa

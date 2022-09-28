import StatisticItem from '../components/StatisticItem'
import DestinationImage from '../components/DestinationImage'
import titan from '../../src/assets/destination/image-titan.png'

import React from 'react'

const DestinationTitan = ({ submenu }) => {
  return (
    <div className='destination-container'>
      <DestinationImage image={titan} alt='Moon Image' />
      <div className='destination-text'>
        {submenu}
        <h2>TITAN</h2>
        <p>
          He only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className='detination-info'>
          <div>
            <StatisticItem title='AVG. DISTANCE' info='1.6 BIL. KM' />
          </div>
          <div className='destination-info-2'>
            <StatisticItem title='EST. TRAVEL TIME' info='7 YEARS' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationTitan

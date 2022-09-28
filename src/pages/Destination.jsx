import { useState } from 'react'
import SubMenu from '../containers/SubMenu'
import DestinationMoon from '../containers/DestinationMoon'
import DestinationEuropa from '../containers/DestinationEuropa'
import DestinationTitan from '../containers/DestinationTitan'
import DestinationMars from '../containers/DestinationMars'

const Destination = () => {
  const [submenu, setSubMenu] = useState({
    destination: 'moon'
  })

  const { destination } = submenu

  const showDest = (destinaton) => {
    setSubMenu({ destination: destinaton })
  }

  return (
    <div className='bg destination-bg'>
      <div className='destination-container'>
        <h5><span>01</span> Pick your destination</h5>
        <SubMenu
          showMoon={() => { showDest('moon') }}
          showMars={() => { showDest('mars') }}
          showEurope={() => { showDest('europe') }}
          showTitan={() => { showDest('titan') }}
        />

        {destination === 'moon' && <DestinationMoon />}
        {destination === 'mars' && <DestinationMars />}
        {destination === 'europe' && <DestinationEuropa />}
        {destination === 'titan' && <DestinationTitan />}
      </div>
    </div>
  )
}

export default Destination

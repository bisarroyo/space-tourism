import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar () {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                <p className='nav-text'><strong>00</strong> Home</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/destination'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                <p className='nav-text'><strong>01</strong> Destination</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/crew'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                <p className='nav-text'><strong>02</strong> Crew</p>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/technology'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                <p className='nav-text'><strong>03</strong> Technology</p>
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            {/* {click ? <IoIosCloseCircleOutline /> : <BiMenuAltRight />} */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar

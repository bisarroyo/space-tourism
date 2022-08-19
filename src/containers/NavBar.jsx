import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar () {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <NavLink to='/' className='nav-logo'>
            {/* <FaBlog /> */}
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/destination'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Destination
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/crew'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Crew
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/technology'
                className={({ isActive }) => isActive ? 'nav-links active' : 'nav-links'}
                onClick={handleClick}
              >
                Technology
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

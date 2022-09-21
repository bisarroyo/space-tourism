import { NavLink } from 'react-router-dom'

const HomeButton = () => {
  return (
    <>
      <NavLink
        to='/destination'
        className='home-button'
      >
        <h4>EXPLORE</h4>
      </NavLink>
    </>
  )
}

export default HomeButton

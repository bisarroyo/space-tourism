const SubMenu = ({ showMoon, showMars, showEurope, showTitan }) => {
  return (
    <div className='submenu-container'>
      <ul>
        <li className='nav-text' onClick={showMoon}>MOON</li>
        <li className='nav-text' onClick={showMars}>MARS</li>
        <li className='nav-text' onClick={showEurope}>EUROPA</li>
        <li className='nav-text' onClick={showTitan}>TITAN</li>
      </ul>
    </div>
  )
}

export default SubMenu

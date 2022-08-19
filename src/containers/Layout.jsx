import NavBar from '../containers/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout

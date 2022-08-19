import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'
import Technology from '../pages/Technology'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

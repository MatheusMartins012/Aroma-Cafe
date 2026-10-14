import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'

import Home from '../pages/Home'

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default AppRoutes

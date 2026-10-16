import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'
import Cardapio from '../pages/Cardapio'

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />}/>
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

import Home from '../pages/Home'
import Cardapio from '../pages/Cardapio'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
         <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />}/>
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes

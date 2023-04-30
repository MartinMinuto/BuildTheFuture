import './App.css'
import Carusel from './Components/Carusel/Carusel'
import ComponentIcon from './Components/ComponentIcon/ComponentIcon'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import CartDetailsContainer from './Components/CartDetailsContainer/CartDetailsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsContainerPage from './Components/DetailsContainerPage/DetailsContainerPage'

function App() {
   return(
    <BrowserRouter>
        <Navbar/>
        <Carusel/>
        <ComponentIcon/>
        <Routes>
          <Route path='/' element={<CartDetailsContainer/>}/>
          <Route path='/item/:productId' element={<DetailsContainerPage/>}/>
        </Routes>  
        <Footer/>
    </BrowserRouter>
   )
}

export default App

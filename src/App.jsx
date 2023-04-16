import './App.css'
import Carusel from './Components/Carusel/Carusel'
import ComponentIcon from './Components/ComponentIcon/ComponentIcon'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() {
   return(
    <BrowserRouter>
        <Navbar/>
        <Carusel/>
        <ComponentIcon/>
        <Footer/>
    </BrowserRouter>
   )
}

export default App

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() {
   return(
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
   )
}

export default App

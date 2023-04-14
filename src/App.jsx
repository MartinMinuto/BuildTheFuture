import './App.css'
import CategoryNav from './Components/CategoryNav/CategoryNav'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() {
   return(
    <BrowserRouter>
        <Navbar/>
        <CategoryNav/>
    </BrowserRouter>
   )
}

export default App

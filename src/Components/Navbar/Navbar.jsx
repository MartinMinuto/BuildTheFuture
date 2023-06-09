import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import  CategoryNav  from '../CategoryNav/CategoryNav'

const Navbar = () => {
   const [open, setOpen] = useState(false)

   const handleClick = () => {
    setOpen(!open)
   }

    return(
        <nav>
            <div className='NavbarContainer'>
              <div>
                  {open ? (
                    <MdClose className='icon' onClick={handleClick} />
                  ) : (
                    <FiMenu className='icon' onClick={handleClick} />
                  )}
              </div>
              <div className={`no-show ${open ? 'show' : ''}`}>
                <Link className='Direction' to="/">Inicio</Link>
                <Link className='Direction' to="/acerca">Acerca de</Link>
                <Link className='Direction' to="/contacto">Contacto</Link>
                <Link className='Direction' to="/contacto">Contacto</Link>
              </div>
              <div className='ContainerSearch'>
                 <input className='Text' type="text" />
                 <AiOutlineSearch className='SearchButton'/>
              </div>
              <div className='ContainerLogo'>
                 <AiOutlineShoppingCart className='icon'/>
              </div>  
            </div>
            <CategoryNav/>
        </nav>
    )
}

export default Navbar
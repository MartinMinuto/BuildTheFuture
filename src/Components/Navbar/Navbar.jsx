import './Navbar.css'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
   const [open, setOpen] = useState(false)

   const handleClick = () => {
    setOpen(!open)
   }

    return(
        <nav>
            <div className='NavbarContainer'>
              <div className='ContainerLogo'>
                 <img src="" alt="" />
              </div>  
              <div className='ContainerSearch'>
                 <input className='Text' type="text" />
                 <a className='SearchButton'>Search</a>
              </div>
              <FiMenu onClick={handleClick}/>
              <div className={`no-show ${open ? 'show' : ''}`}>
                <Link className='Direction' to="/">Inicio</Link>
                <Link className='Direction' to="/acerca">Acerca de</Link>
                <Link className='Direction' to="/contacto">Contacto</Link>
              </div>
            </div>
        </nav>
    )
}

export default Navbar
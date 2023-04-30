import './AboutUs.css'
import { AiOutlineShop, AiOutlineShopping } from 'react-icons/ai'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

const AboutUs = () => {
    return(
        <div>
           <h1>Title</h1>
           <p>Sobre nosotros</p>
           <p>datos de la empresa</p>
           <div>
            <AiOutlineShop></AiOutlineShop>
            <AiOutlineShopping></AiOutlineShopping>
            <MdOutlineLocalOffer></MdOutlineLocalOffer>
            <BsFillPersonFill></BsFillPersonFill>
           </div>
           <h2>Donde encontrarnos</h2>
           {/* map */}
        </div>
    )
}

export default AboutUs
import './ComponentIcon.css'
import { AiOutlineShop, AiOutlineShopping } from 'react-icons/ai'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'

const ComponentIcon = () => {
    return (
        <div className='ContainerIcons'>
          <AiOutlineShop className='IconsComponent'/>
          <AiOutlineShopping className='IconsComponent'/>
          <MdOutlineLocalOffer className='IconsComponent'/>
          <BsFillPersonFill className='IconsComponent'/>
        </div>
    )
}

export default ComponentIcon
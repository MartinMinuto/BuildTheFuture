import './Footer.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {

    return (
        <div className='FooterLinks'>
         <a href="https://github.com/MartinMinuto" target='_blank'><AiFillGithub className='IconFooter'/></a>
          <a href="https://www.linkedin.com/in/martin-minuto/" target='_blank'><AiFillLinkedin className='IconFooter'/></a>
        </div>
    )
}

export default Footer
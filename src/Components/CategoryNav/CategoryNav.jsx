import { Link } from 'react-router-dom'
import './CategoryNav.css'

const CategoryNav = () => {
    return (
        <div>
            <div className='CategoryContainer'>
              <Link className='CategoryLink' to='/'>Home</Link>
              <Link className='CategoryLink' to='/'>Procesor</Link>
              <Link className='CategoryLink' to='/'>Home</Link>
              <Link className='CategoryLink' to='/'>Procesor</Link>
            </div>
        </div>
    )
}

export default CategoryNav
import './CartContainer.css'
import { Link } from 'react-router-dom'

const CartContainer = ({products}) => {
    return (
        <div>
        {products && products.length > 0 ? (
          <div className='ContainerMain'>
            {products.map((prod) => (
              <div className='ContainerCard' key={prod.id}>
                <img className='ImgCard' src={prod.img} alt={prod.name} />
                <h1 className='TitleCard'>{prod.name}</h1>
                <h2 className='CategoryCard'>{prod.category}</h2>
                <Link to={`/item/${prod.id}`} className='BtnCard'>Details</Link>
              </div>
            ))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    )
}

export default CartContainer
import { useState, useEffect  } from 'react'
import { getProducts } from '../../AsyncMock'
import  CartContainer  from '../CartContainer/CartContainer'

const CartDetailsContainer = () => {
    const [products, setProducts] = useState([])  

    useEffect(() => {
        getProducts()
        .then(products => {
          setProducts(products)
        })

    }, [])


    return (
        <CartContainer products={products}/>
    )
}

export default CartDetailsContainer
import { useState, useEffect } from 'react'
import { getProductsById } from '../../AsyncMock'
import { useParams } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'

const DetailsContainerPage = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
       getProductsById(productId)
         .then (product => {
            setProduct(product)
         })
    }, [productId])

    return (
        <div>
           <DetailsPage {...product}/>
        </div>
    )
}

export default DetailsContainerPage
import './DetailsPage.css'

const DetailsPage = ({name, price, img, category}) => {
    return (
        <div>
            <div className='detailsContainer'>
                <img className='detailsImg' src={`${img}`} alt={name}/>
                <div className='detailsSubContainer'>
                  <div className='detailsPositionContainer'>
                    <h1 className='detailsName'>{name}</h1>
                  </div>
                  <div className='detailsPositionContainer'> 
                    <h2 className='detailsCategory'>{category}</h2>
                  </div>  
                  <div className='detailsPositionContainer'>  
                    <h3 className='detailsPrice'>$ {price}</h3>
                  </div>   
                </div>
            </div>
        </div>
    )
}

export default DetailsPage
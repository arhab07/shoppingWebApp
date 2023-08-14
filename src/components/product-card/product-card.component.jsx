import React , {useContext} from 'react'

import Button  ,  {BUTTON_TYPE_STYLE} from '../Button/Button'
import "./product-card.styles.scss"
import { CartContext } from '../../context/cart.component'
const ProductCard = ({products}) => {
    const {name , price , imageUrl} =  products
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(products)
  return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_STYLE.inverted} onClick={addProductToCart} >Add to card</Button>
        </div>
  )
}

export default ProductCard
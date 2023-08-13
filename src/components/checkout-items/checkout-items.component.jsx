import React , {useContext} from 'react'
import "./checkout-item.styles.scss"
import { CartContext } from '../../context/cart.component'
const CheckoutItems= ({cartItems}) => {
    const {name , quantity , imageUrl , price} = cartItems
    const {  clearCart , addItemToCart , removeItem  } = useContext(CartContext) 
    const addItem = () => addItemToCart(cartItems)
    const subractItem = () => removeItem (cartItems)
    const clearItemHandler = () => clearCart(cartItems); 
  return (
   <div className='checkout-item-container'>
    <div className='image-container '>
        <img alt={`${name}`} src={imageUrl} />
    </div>
    <span className='name'>{name}</span>

    <span className='quantity'>
    <div className='arrow' onClick={subractItem}>
        <span>&#10094;</span>
    </div>
    <span className='value'>{quantity}</span> 
    <div className='arrow' onClick={addItem}>
    <span>&#10095;</span>
    </div>
    </span>
    <span className='price'>{price}</span>
    <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
   </div>
  )
}

export default CheckoutItems
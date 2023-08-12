import React , {useContext} from 'react'
import { ReactComponent  as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.component'

import "./cart-icon.styles.scss"
const Cart = ({cart}) => {
    // const {quantity} = cart
    const {isOpen , setIsOpen , totalItemToCart} = useContext(CartContext)

    const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <div className='cart-icon-container' onClick={toggleOpen}>
        <ShoppingCart className='shopping-icon' />
        <span className='item-count'>{totalItemToCart}</span>
    </div>
  )
}

export default Cart
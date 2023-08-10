import React , {useContext} from 'react'
import { ReactComponent  as ShoppingCart } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.component'
import "./cart-icon.styles.scss"
const Cart = () => {
    const {isOpen , setIsOpen} = useContext(CartContext)
    const toggleOpen = () => setIsOpen(!isOpen)
  return (
    <div className='cart-icon-container' onClick={toggleOpen}>
        <ShoppingCart className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
  )
}

export default Cart
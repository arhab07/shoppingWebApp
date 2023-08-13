import React , {useContext} from 'react'
import Button from '../Button/Button'
import "./cart-dropdown.styles.scss"
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../context/cart.component'
import {  useNavigate } from 'react-router-dom'
const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const checkoutPage = () => {
        navigate("/checkout")
    }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' >
         {cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} cartItem={item} />
                )
         })}
        
         </div>

            <Button  buttonType={"default"} onClick={checkoutPage}  >Go to checkout</Button>
    </div>
  )
}

export default CartDropDown
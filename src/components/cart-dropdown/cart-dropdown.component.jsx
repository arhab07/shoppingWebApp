import React , {useContext} from 'react'
import Button , {BUTTON_TYPE_STYLE} from '../Button/Button'
import {CartDropdownContainer , EmptyMessage , CartItems} from "./cart-dropdown.styles"
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
    <CartDropdownContainer className='cart-dropdown-container'>
        <CartItems >
        {cartItems.length ? (
          cartItems.map((item)=>{
                return(
                    <CartItem key={item.id} cartItem={item} />
                )
         })
        ) : <EmptyMessage>Your cart is empty</EmptyMessage> }  
         {}
        
         </CartItems>

            <Button  buttonType={BUTTON_TYPE_STYLE.base} onClick={checkoutPage}  >Go to checkout</Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown
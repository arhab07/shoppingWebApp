import React from 'react'
import Button from '../Button/Button'
import "./cart-dropdown.styles.scss"
const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
            <Button  buttonType={"default"}  >Go to checkout</Button>
    </div>
  )
}

export default CartDropDown
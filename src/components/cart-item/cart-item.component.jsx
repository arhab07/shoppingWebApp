import React  from 'react'
import "./cart-item.styles.scss"

const CartItem = ({cartItem}) => {

    const {name , quantity , imageUrl , price} = cartItem

  return (
    <div className='cart-item-container '>
    <img alt='aslmck' src={imageUrl} />
    <div className='item-details'>

        <span className='name'>{name}</span>
        <span>{quantity} x ${price}</span>
    </div>
    </div>
  )
}

export default CartItem
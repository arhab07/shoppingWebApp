import React , {useContext} from 'react'
import { CartContext } from '../../context/cart.component'

import "./checkout.styles.scss"
import CheckoutItems from '../../components/checkout-items/checkout-items.component'

const CheckOut = () => {
    const { cartItems ,totalPrice} = useContext(CartContext)

    
 
  return (
    <div className='checkout-container'>
    <div className='checkout-header'>
            <div className='header-block '><span>Product</span></div>
            <div className='header-block '><span>Description</span></div>
            <div className='header-block '><span>Quantity</span></div>
            <div className='header-block '><span>Price</span></div>
            <div className='header-block '><span>Remove</span></div>
            
    </div>
    {cartItems.map((item)=>{
        return(
          <CheckoutItems cartItems={item}  key={item.id}/>
        )
    })}
   <span className='total'>Total : ${totalPrice}</span>
    </div>
  )
}

export default CheckOut
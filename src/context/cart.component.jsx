import { createContext  , useState} from "react";

  export const addCartItem = ( cartItems , addProductToCarts) => {
    const exisitingCartItems = cartItems.find(
      (cartItem)=>   cartItem.id === addProductToCarts.id
    )

    if(exisitingCartItems){
      return cartItems.map((cartItem)=>
          cartItem.id === addProductToCarts.id 
          ? {...cartItem , quantity: cartItem.quantity + 1} 
          : cartItem
    )
    }
    return [...cartItems, {...addProductToCarts , quantity:1}]
  }

const calculateToatalItemInCarts = (cartItems) => {
  let totalItems = 0;
  for(const cart of cartItems){
    totalItems += cart.quantity
  }
return totalItems
}

  



export const CartContext = createContext({
    isOpen : false,
    setIsOpen : () => {},
    cartItems:[],
    addItemToCart : () => {},
    totalItemToCart : 0
})

export const CartProvider = (({children})=> {
    const [isOpen , setIsOpen] = useState(false)
     const [cartItems, setCartItems] = useState([]);
      const totalItemToCart = calculateToatalItemInCarts(cartItems)
  const addItemToCart = (addToCart) => {
      setCartItems(addCartItem(cartItems , addToCart))
  }
    const value = {isOpen , setIsOpen , cartItems , setCartItems , addItemToCart , totalItemToCart }
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
})
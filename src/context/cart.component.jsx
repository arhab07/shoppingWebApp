import { createContext  , useState , useEffect} from "react";


// Adding the items in carts
export const addItemsToCarts = (cartItems , addProductToCart) => {
  const existingItems = cartItems.find(
    (item) => item.id === addProductToCart.id
    )
    if(existingItems){
    return  cartItems.map((cartItem) => 
        cartItem.id === addProductToCart.id ?
         {...cartItem , quantity: cartItem.quantity + 1} 
         : cartItem
      )
    }

    return [...cartItems , {...addProductToCart , quantity : 1}]
}

// reduce the item in the cart items
export const removeItemFromCheckout = (cartItems , removeItemFromCart) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === removeItemFromCart.id
  )

  if(existingItem.quantity === 1){
    return cartItems.filter(
      (cartItem) => cartItem.id !== removeItemFromCart.id
    )
  }

  return cartItems.map(
    (cartItem) => cartItem.id === removeItemFromCart.id ? {...cartItem , quantity: cartItem.quantity - 1} : cartItem
  )
}

// remove the item from the cart 
const clearCartItem = (cartItems, cartItemToClear) => (
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
  );





export const CartContext = createContext({
    isOpen : false,
    setIsOpen : () => {},
    cartItems:[],
    addItemToCart : () => {},
    totalItemToCart : 0,
    removeItem: () => {},
    clearCart: () => {},
    totalPrice :0,
})


export const CartProvider = (({children})=> {
    const [isOpen , setIsOpen] = useState(false) //toggle the icon of the cart
     const [cartItems, setCartItems] = useState([]);
     const [totalPrice , setTotal] = useState();
     const [totalItemToCart , setTotalItemToCart] = useState()
      // const totalItemToCart = calculateTotalValue(cartItems)

      useEffect(() => {
        const newCartTotal = cartItems.reduce(  //total item to the cart (inside the icon )
          (total , cartItem) => total + cartItem.quantity,
          0
          )
          setTotalItemToCart(newCartTotal)
      },[cartItems])
      useEffect(()=>{ //setting the total pirce of an item
        const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setTotal(newCartTotal)
      },[cartItems])

  const addItemToCart = (productToCart) => {
        setCartItems(addItemsToCarts(cartItems, productToCart))
  }

  const removeItem = (removeItems) => {
    setCartItems(removeItemFromCheckout(cartItems,removeItems))
  }
  const clearCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  }
 
    const value = {isOpen,
                   setIsOpen,
                   cartItems,
                   setCartItems,
                   addItemToCart,
                   totalItemToCart ,
                   removeItem,
                   clearCart,
                   totalPrice
                  }   
 
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
})
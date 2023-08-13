import { createContext  , useState , useEffect} from "react";

 export const addItemsToCarts = (cartItems , addProductToCarts) => {
  const existingItems =  cartItems.find(
    (cartItem) => cartItem.id === addProductToCarts.id
  )
    if(existingItems){
      return cartItems.map((cartItem) =>
      cartItem.id === addProductToCarts.id ? { ...cartItem , quantity : cartItem.quantity + 1} : cartItem
      )
    }

return [...cartItems , { ...addProductToCarts , quantity:1}]

 }


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
const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const calculateTotalValue = (items) => {
  let totalValue = 0;
  for(const item of items){
    totalValue += item.quantity

  }
  return totalValue

}
// const calculateTotalPrice = (cartItems) => {
//   const newCartTotal = cartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );
// return newCartTotal
// }



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
    const [isOpen , setIsOpen] = useState(false)
     const [cartItems, setCartItems] = useState([]);
     const [totalPrice , setTotal] = useState();
      const totalItemToCart = calculateTotalValue(cartItems)
      useEffect(()=>{
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
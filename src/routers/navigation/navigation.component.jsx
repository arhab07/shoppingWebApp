import React , {useContext} from 'react'
import { Outlet  } from 'react-router-dom'
import  {LogoContainer,NavLink , NavLinksContainer,NavigationContainer}  from "./navigation.style"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { UserContext } from '../../context/context.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import Cart from '../../components/cart/cart'
import "../../components/cart-dropdown/cart-dropdown.styles.jsx"
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.component'
const Navigation = () => {
  const {currentUser  } = useContext(UserContext)
  const {isOpen } = useContext(CartContext)
  // console.log(currentUser)

  // const signUserHAnddler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  // }
  return (
    <>
        <NavigationContainer>
        <LogoContainer to="/" >
            <CrownLogo className="logo" />
                
        </LogoContainer>
            <NavLinksContainer>
                    <NavLink to="/shop" >
                            Shop
                    </NavLink>
                    {currentUser ? (<NavLink as={"span"} onClick={signOutUser}>Sign Out</NavLink>):(  <NavLink  to="/auth" >
                            Sign-In
                    </NavLink>)}
                  <Cart />
            </NavLinksContainer>
            {isOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
    </>
  )
}

export default Navigation
import React , {useContext} from 'react'
import { Outlet , Link } from 'react-router-dom'
import "./navigation.style.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { UserContext } from '../../context/context.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import Cart from '../../components/cart/cart'
import "../../components/cart-dropdown/cart-dropdown.styles.scss"
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.component'
const Navigation = () => {
  const {currentUser , setCurrentUser} = useContext(UserContext)
  const {isOpen , setIsOpen} = useContext(CartContext)
  // console.log(currentUser)

  // const signUserHAnddler = async () => {
  //   await signOutUser()
  //   setCurrentUser(null)
  // }
  return (
    <>
        <div className='navigation'>
        <Link className='logo-container' to="/" >
            <CrownLogo className="logo" />
                
        </Link>
            <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop" >
                            Shop
                    </Link>
                    {currentUser ? (<span className='nav-link' onClick={signOutUser}>Sign Out</span>):(  <Link className='nav-link' to="/auth" >
                            Sign-In
                    </Link>)}
                  <Cart />
            </div>
            {isOpen && <CartDropDown />}
        </div>
        <Outlet />
    </>
  )
}

export default Navigation
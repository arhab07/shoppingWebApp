import React , {useContext} from 'react'
import { Outlet , Link } from 'react-router-dom'
import "./navigation.style.scss"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import { UserContext } from '../../context/context.component'
import { signOutUser } from '../../utils/firebase/firebase.utils'
const Navigation = () => {
  const {currentUser , setCurrentUser} = useContext(UserContext)
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
                  
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Navigation
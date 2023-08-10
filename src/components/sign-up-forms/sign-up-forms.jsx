import React , {useState , useContext} from 'react'
import {signInWithGooglePopup , createUserDocumentFromAuth , signAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import "./sign-up-forms.style.scss"
import Button from '../Button/Button';
// import { UserContext } from '../../context/context.component';
const defaultForm = {

    email :"",
    password:"",

}

const SignUpForm = () => {

    const [formField , setFormField] = useState(defaultForm);
    const { email, password } = formField;
    // console.log(formField);
    // const {setCurrentUser} = useContext(UserContext)
    const resethanddler = () => {
        setFormField(defaultForm)
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
     
      };
         
    const handleSubmit = async(event) => {
        event.preventDefault();
        

        try{
            const {user} = await signAuthUserWithEmailAndPassword(email , password)
            // setCurrentUser(user);
            resethanddler();
        
        }catch(error){
                if(error.code === "auth/wrong-password"){ 
                 alert(error.code)
                }else if(error.code === "auth/user-not-found"){
                    alert("User Not Found")
                }

        }
    
    }
const handleChange = (e) => {
    const {name , value} = e.target;
    setFormField({...formField , [name]:value});
}


  return (
    <div className='sign-up-container'>
        <h2>Alredy have an account ?</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={handleSubmit}>
            <FormInput 
            label="Email"
            required 
            type='email' 
            name="email" 
            value={email} 
            onChange={handleChange} />
            <FormInput  
            label="Password" 
            required 
            type='password' 
            name="password" 
            value={password} 
            onChange={handleChange} />

              <div className='buttons-container'>
            <Button buttonType={"default"}  type='submit' >Sign In</Button>
            <Button buttonType={"google"} type="button" onClick={logGoogleUser} > Google Sign In</Button>
                </div>

        </form>
    </div>
  )
}

export default SignUpForm
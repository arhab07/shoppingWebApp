import React , {useState} from 'react'
import { createAuthUserWithEmailAndPassword  , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import "./sign-in-form.style.scss"
import Button from '../Button/Button';
const defaultForm = {
    displayName: "",
    email :"",
    password:"",
    confirmPassword:"",
}

const SignInForm = () => {

    const [formField , setFormField] = useState(defaultForm);
    const {displayName , email, password , confirmPassword} = formField;
    console.log(formField);
    const resethanddler = () => {
        setFormField(defaultForm)
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
    
        if(password !== confirmPassword){
            alert("Your password did not match")
        }
    
        try{
        const {user} = await createAuthUserWithEmailAndPassword(email , password);
    
        await createUserDocumentFromAuth(user, {displayName})
        resethanddler();
        
        }catch(error){
                console.log(error.code)
        }
    
    }
const handleChange = (e) => {
    const {name , value} = e.target;
    setFormField({...formField , [name]:value});
}


  return (
    <div className='sign-up-container'>
        <h2>Don't have an account ?</h2>
        <span>Sign in with your Email and Password</span>
        <form onSubmit={handleSubmit}>

            <FormInput
            label="Display Name" 
            name='displayName' 
            required
            type='text' 
            value={displayName} 
            onChange={handleChange} />

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

            <FormInput 
            label="Confirm Password" 
            required 
            type='password' 
            name="confirmPassword" 
            value={confirmPassword} 
            onChange={handleChange} />
            <Button buttonType={"default"} name={"Sign Up"} type='submit' >Sign Up </Button>
        </form>
    </div>
  )
}

export default SignInForm
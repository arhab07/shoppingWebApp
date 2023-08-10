import React from 'react';
// import { getRedirectResult } from 'firebase/auth';

import SignInForm from '../../components/sign-in-form/sign-in-form';
import SignUpForm from '../../components/sign-up-forms/sign-up-forms';
import "./authen.scss"
const Authentication = () => {
  // useEffect(() => {
  //   const checkRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if(response){
  //       const userDocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   };
  
  //   checkRedirectResult();
  // }, []);

 
  return (
    <div className='auth-container'>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;

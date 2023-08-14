import styled from "styled-components"
import { BasedButton, GoogleButton, InvertedButton } from "../Button/button.style";

export const  CartDropdownContainer  = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
 ${BasedButton},
 ${GoogleButton},
 ${InvertedButton}{
  margin-top: auto;
 }
`


export const EmptyMessage = styled.span`
  font-size: 30px;
  font-weight: bold;
 font-family: 'Bad Script', cursive;
   margin: 50px auto;
   display: "flex"  ;
  justifyContent:"center";
  alignContent: center;

  
`
export const CartItems = styled.div`
 height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
` 

// .cart-dropdown-container {
 

//   .empty-message {
//     
//   }

//   .cart-items {
   
//   }

//   button {
//    
//   }
// }

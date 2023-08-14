import React from 'react';
import { BasedButton, GoogleButton, InvertedButton } from "./button.style.jsx";

export const BUTTON_TYPE_STYLE = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_STYLE.base) => ({
  [BUTTON_TYPE_STYLE.base]: BasedButton,
  [BUTTON_TYPE_STYLE.google]: GoogleButton,
  [BUTTON_TYPE_STYLE.inverted]: InvertedButton,
}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  // if (!CustomButton) {
  //   console.error(`Invalid buttonType: ${buttonType}`);
  //   return null; // Handle the error gracefully
  // }
  
  return <CustomButton buttonType={buttonType} {...otherProps}>{children}</CustomButton>;
};

export default Button;

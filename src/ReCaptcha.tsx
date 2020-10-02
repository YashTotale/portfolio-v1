// React Imports
import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

interface ReCaptchaProps {}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR">
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptcha;

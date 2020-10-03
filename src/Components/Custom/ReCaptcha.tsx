// React Imports
import React from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface ReCaptchaProps {}

const ReCaptcha: React.FC<ReCaptchaProps> = ({}) => {
  const classes = useStyles();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const dispatch = useDispatch();
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfMMNMZAAAAAGI8NZ5NaRD7GxUy3PF0sWH-emoj"></GoogleReCaptchaProvider>
  );
};

export default ReCaptcha;

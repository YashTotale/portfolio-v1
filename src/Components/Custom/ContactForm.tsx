// React Imports
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { EMAIL_REGEX } from "../../Utils/constants";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "../../Redux/selectors";
import { setContact } from "../../Redux/actions";

// Material UI Imports
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import {} from "@material-ui/icons";

interface StyleProps {
  errors: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: "10px 0px",
    width: "100%",
  },
  submit: {
    margin: "10px 0px",
    cursor: ({ errors }) => (errors ? "not-allowed" : "pointer"),
  },
  submitDisabled: {
    cursor: "not-allowed",
  },
}));

interface ContactFormProps {}

export interface Inputs {
  name: string;
  message: string;
  email: string;
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const dispatch = useDispatch();

  const { name, email } = useSelector(getContact);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const { register, handleSubmit, errors } = useForm<Inputs>({
    mode: "onTouched",
    defaultValues: {
      name,
      email,
    },
  });

  const errorsBool = Boolean(Object.keys(errors).length);

  const classes = useStyles({
    errors: errorsBool,
  });

  const onSubmit: SubmitHandler<Inputs> = async (inputs, e) => {
    dispatch(setContact(inputs));
    console.log(executeRecaptcha);
    const token = await executeRecaptcha?.("contact_form");
    console.log(token);
    if (token) {
      e?.preventDefault();
      const form = e?.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
        } else {
        }
      };
      xhr.send(data);
    }
  };

  return (
    <div>
      <form
        className={classes.contact}
        action="https://formspree.io/f/mdopkrnb"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          className={classes.input}
          variant="outlined"
          label="Name"
          name="name"
          inputRef={register({
            required: { message: "This field is required", value: true },
          })}
        />
        <TextField
          error={Boolean(errors.message)}
          helperText={errors.message?.message}
          className={classes.input}
          variant="outlined"
          label="Message"
          name="message"
          inputRef={register({
            required: { message: "This field is required", value: true },
          })}
          multiline
          rows={2}
          rowsMax={20}
        />
        <TextField
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          className={classes.input}
          variant="outlined"
          label="Email"
          name="email"
          inputRef={register({
            required: { message: "This field is required", value: true },
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email address",
            },
          })}
        />
        <GoogleReCaptchaProvider reCaptchaKey="6LfMMNMZAAAAAGI8NZ5NaRD7GxUy3PF0sWH-emoj">
          <Button
            className={classes.submit}
            color="primary"
            variant="outlined"
            type={errorsBool ? undefined : "submit"}
          >
            Submit
          </Button>
        </GoogleReCaptchaProvider>
      </form>
    </div>
  );
};

export default ContactForm;

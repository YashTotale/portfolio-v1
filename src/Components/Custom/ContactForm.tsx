// React Imports
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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

  const { register, handleSubmit, errors } = useForm<Inputs>();

  const errorsBool = Boolean(Object.keys(errors).length);

  const classes = useStyles({
    errors: errorsBool,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(setContact(data));
    console.log(data);
  };

  return (
    <div>
      <form
        className={classes.contact}
        action="https://www.form-data.com/_functions/submit/9r16l9c8dp0gju44zhij9h"
        method="post"
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
          defaultValue={name}
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
              message: "Enter a valid email address",
            },
          })}
          defaultValue={email}
        />
        <Button
          className={classes.submit}
          color="primary"
          variant="outlined"
          type={errorsBool ? undefined : "submit"}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

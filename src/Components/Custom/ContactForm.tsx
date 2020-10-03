// React Imports
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";

// Material UI Imports
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Button, FormHelperText, TextField } from "@material-ui/core";
import {} from "@material-ui/icons";
import { EMAIL_REGEX } from "../../Utils/constants";

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

type Inputs = {
  name: string;
  message: string;
  email: string;
  recaptcha: string;
};

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { register, handleSubmit, errors, control, setError } = useForm<
    Inputs
  >();

  const errorsBool = Boolean(Object.keys(errors).length);

  const classes = useStyles({
    errors: errorsBool,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form
        className={classes.contact}
        action="https://www.form-data.com/_functions/submit/9r16l9c8dp0gju44zhij9h"
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
              message: "Enter a valid email address",
            },
          })}
        />
        <Controller
          name="recaptcha"
          control={control}
          defaultValue={false}
          rules={{
            required: {
              message: "This field is required",
              value: true,
            },
          }}
          render={({ onChange, value }) => (
            <ReCAPTCHA
              sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
              theme={theme.palette.type}
              key={theme.palette.type}
              onChange={onChange}
              onErrored={() =>
                setError("recaptcha", {
                  message: "An error occurred. Please try again.",
                  type: "required",
                })
              }
            ></ReCAPTCHA>
          )}
        ></Controller>
        {errors.recaptcha && (
          <FormHelperText error>{errors.recaptcha.message}</FormHelperText>
        )}
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

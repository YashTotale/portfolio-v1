import { AnyAction } from "redux";
import {
  SET_CONTACT_EMAIL,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_NAME,
  SET_CONTACT,
} from "../actions/";

export const initialContactState = {
  name: "",
  message: "",
  email: "",
};

export const contactReducer = (
  state = initialContactState,
  action: AnyAction
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CONTACT_NAME: {
      const { name } = payload;
      return { ...state, name };
    }
    case SET_CONTACT_MESSAGE: {
      const { message } = payload;
      return { ...state, message };
    }
    case SET_CONTACT_EMAIL: {
      const { email } = payload;
      return { ...state, email };
    }
    case SET_CONTACT: {
      const { contact } = payload;
      return contact;
    }
    default: {
      return state;
    }
  }
};

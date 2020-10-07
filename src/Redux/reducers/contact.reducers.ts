import { AnyAction } from "redux";
import {
  SET_CONTACT_NAME,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_EMAIL,
  SET_CONTACT_RATING,
  SET_CONTACT_BUGS,
  SET_CONTACT_SUCCESS,
  SET_CONTACT,
} from "../actions/contact.actions";

export const initialContactState = {
  name: "",
  message: "",
  email: "",
  bugs: "",
  rating: <number | undefined>undefined,
  success: <boolean | null>null,
};

export const contactReducer = (
  state = initialContactState,
  action: AnyAction
): typeof initialContactState => {
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
    case SET_CONTACT_RATING: {
      const { rating } = payload;
      return { ...state, rating };
    }
    case SET_CONTACT_BUGS: {
      const { bugs } = payload;
      return { ...state, bugs };
    }
    case SET_CONTACT_SUCCESS: {
      const { success } = payload;
      return { ...state, success };
    }
    case SET_CONTACT: {
      const { contact } = payload;
      return { ...state, ...contact };
    }
    default: {
      return state;
    }
  }
};

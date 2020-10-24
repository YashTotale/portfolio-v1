import { AnyAction } from "redux";
import { Rating } from "../../Utils/types";
import {
  SET_CONTACT_NAME,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_EMAIL,
  SET_CONTACT_RATING,
  SET_CONTACT_BUGS,
  SET_CONTACT_LOADING,
  SET_CONTACT_SUCCESS,
  SET_CONTACT,
} from "../actions/contact.actions";

export interface ContactState {
  name: string;
  message: string;
  email: string;
  bugs: string;
  rating: Rating | null;
  loading: boolean;
  success: boolean | null;
}

export const initialContactState: ContactState = {
  name: "",
  message: "",
  email: "",
  bugs: "",
  rating: null,
  loading: false,
  success: null,
};

export const contactReducer = (
  state = initialContactState,
  action: AnyAction
): ContactState => {
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
    case SET_CONTACT_LOADING: {
      const { loading } = payload;
      return { ...state, loading };
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

export const sampleContactState: ContactState = {
  ...initialContactState,
};

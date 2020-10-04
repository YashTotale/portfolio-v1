import { State } from "./index";
import { createSelector } from "reselect";

export const getContactName = (state: State) => state.contact.name;

export const getContactMessage = (state: State) => state.contact.message;

export const getContactEmail = (state: State) => state.contact.email;

export const getContactSuccess = (state: State) => state.contact.success;

export const getContact = createSelector(
  getContactName,
  getContactMessage,
  getContactEmail,
  getContactSuccess,
  (name, message, email, success) => ({ name, message, email, success })
);

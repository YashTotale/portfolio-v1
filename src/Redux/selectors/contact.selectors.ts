import { State } from "./index";
import { createSelector } from "reselect";

export const getContactName = (state: State) => state.contact.name;

export const getContactMessage = (state: State) => state.contact.message;

export const getContactEmail = (state: State) => state.contact.email;

export const getContact = createSelector(
  getContactName,
  getContactMessage,
  getContactEmail,
  (name, message, email) => ({ name, message, email })
);

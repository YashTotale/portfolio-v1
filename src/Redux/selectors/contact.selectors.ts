import { State } from "./index";

export const getContactName = (state: State) => state.contact.name;

export const getContactMessage = (state: State) => state.contact.message;

export const getContactEmail = (state: State) => state.contact.email;

export const getContactRating = (state: State) => state.contact.rating;

export const getContactBugs = (state: State) => state.contact.bugs;

export const getContactLoading = (state: State) => state.contact.loading;

export const getContactSuccess = (state: State) => state.contact.success;

export const getContact = (state: State) => state.contact;

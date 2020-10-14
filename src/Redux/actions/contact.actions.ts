import { Inputs } from "../../Components/Custom/ContactForm";
import { Rating } from "../../Utils/types";
export interface SetContactNamePayload {
  type: typeof SET_CONTACT_NAME;
  payload: {
    name: string;
  };
}

export const SET_CONTACT_NAME = "SET_CONTACT_NAME";
export const setContactName = (name: string): SetContactNamePayload => ({
  type: SET_CONTACT_NAME,
  payload: { name },
});

export interface SetContactMessagePayload {
  type: typeof SET_CONTACT_MESSAGE;
  payload: {
    message: string;
  };
}

export const SET_CONTACT_MESSAGE = "SET_CONTACT_MESSAGE";
export const setContactMessage = (
  message: string
): SetContactMessagePayload => ({
  type: SET_CONTACT_MESSAGE,
  payload: { message },
});

export interface SetContactEmailPayload {
  type: typeof SET_CONTACT_EMAIL;
  payload: {
    email: string;
  };
}

export const SET_CONTACT_EMAIL = "SET_CONTACT_EMAIL";
export const setContactEmail = (email: string): SetContactEmailPayload => ({
  type: SET_CONTACT_EMAIL,
  payload: { email },
});

export interface SetContactRatingPayload {
  type: typeof SET_CONTACT_RATING;
  payload: {
    rating: Rating;
  };
}

export const SET_CONTACT_RATING = "SET_CONTACT_RATING";
export const setContactRating = (rating: Rating): SetContactRatingPayload => ({
  type: SET_CONTACT_RATING,
  payload: {
    rating,
  },
});

export interface SetContactBugsPayload {
  type: typeof SET_CONTACT_BUGS;
  payload: {
    bugs: string;
  };
}

export const SET_CONTACT_BUGS = "SET_CONTACT_BUGS";
export const setContactBugs = (bugs: string): SetContactBugsPayload => ({
  type: SET_CONTACT_BUGS,
  payload: {
    bugs,
  },
});

export interface SetContactLoadingPayload {
  type: typeof SET_CONTACT_LOADING;
  payload: {
    loading: boolean;
  };
}

export const SET_CONTACT_LOADING = "SET_CONTACT_LOADING";
export const setContactLoading = (
  loading: boolean
): SetContactLoadingPayload => ({
  type: SET_CONTACT_LOADING,
  payload: { loading },
});

export interface SetContactSuccessPayload {
  type: typeof SET_CONTACT_SUCCESS;
  payload: {
    success: boolean | null;
  };
}

export const SET_CONTACT_SUCCESS = "SET_CONTACT_SUCCESS";
export const setContactSuccess = (
  success: boolean | null
): SetContactSuccessPayload => ({
  type: SET_CONTACT_SUCCESS,
  payload: { success },
});

export interface SetContactPayload {
  type: typeof SET_CONTACT;
  payload: { contact: Inputs };
}

export const SET_CONTACT = "SET_CONTACT";
export const setContact = (contact: Inputs): SetContactPayload => ({
  type: SET_CONTACT,
  payload: { contact },
});

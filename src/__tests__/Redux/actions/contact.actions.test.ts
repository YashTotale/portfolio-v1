import { Inputs } from "../../../Components/Custom/ContactForm";
import {
  setContact,
  setContactBugs,
  SetContactBugsPayload,
  setContactEmail,
  SetContactEmailPayload,
  setContactMessage,
  SetContactMessagePayload,
  setContactName,
  SetContactNamePayload,
  SetContactPayload,
  setContactRating,
  SetContactRatingPayload,
  SET_CONTACT,
  SET_CONTACT_BUGS,
  SET_CONTACT_EMAIL,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_NAME,
  SET_CONTACT_RATING,
} from "../../../Redux/actions/contact.actions";

describe("The contact actions", () => {
  test("The setContactName action", () => {
    const name = "Test name";

    const expected: SetContactNamePayload = {
      type: SET_CONTACT_NAME,
      payload: {
        name,
      },
    };
    const actual = setContactName(name);

    expect(actual).toEqual(expected);
  });

  test("The setContactMessage action", () => {
    const message = "Test message";

    const expected: SetContactMessagePayload = {
      type: SET_CONTACT_MESSAGE,
      payload: {
        message,
      },
    };
    const actual = setContactMessage(message);

    expect(actual).toEqual(expected);
  });

  test("The setContactEmail action", () => {
    const email = "hello@email.com";

    const expected: SetContactEmailPayload = {
      type: SET_CONTACT_EMAIL,
      payload: {
        email,
      },
    };
    const actual = setContactEmail(email);

    expect(actual).toEqual(expected);
  });

  test("The setContactBugs action", () => {
    const bugs = "Test bugs";

    const expected: SetContactBugsPayload = {
      type: SET_CONTACT_BUGS,
      payload: {
        bugs,
      },
    };

    const actual = setContactBugs(bugs);

    expect(actual).toEqual(expected);
  });

  test("The setContactRating action", () => {
    const rating = 4;

    const expected: SetContactRatingPayload = {
      type: SET_CONTACT_RATING,
      payload: {
        rating,
      },
    };

    const actual = setContactRating(rating);

    expect(actual).toEqual(expected);
  });

  test("The setContact action", () => {
    const contact: Inputs = {
      name: "Hello!",
      message: "Goodbye!",
      email: "hello@gmail.com",
      bugs: "",
      rating: null,
    };

    const expected: SetContactPayload = {
      type: SET_CONTACT,
      payload: {
        contact,
      },
    };

    const actual = setContact(contact);

    expect(actual).toEqual(expected);
  });
});

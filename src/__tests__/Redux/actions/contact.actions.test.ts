import { Inputs } from "../../../Components/Custom/ContactForm";
import {
  setContact,
  setContactEmail,
  SetContactEmailPayload,
  setContactMessage,
  SetContactMessagePayload,
  setContactName,
  SetContactNamePayload,
  SetContactPayload,
  SET_CONTACT,
  SET_CONTACT_EMAIL,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_NAME,
} from "../../../Redux/actions/contact.actions";

describe("The contact actions", () => {
  test("The setContactName action", () => {
    const name = "Hello!!";

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
    const message = "Hello!!";

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
    const email = "hello@gmail.com";

    const expected: SetContactEmailPayload = {
      type: SET_CONTACT_EMAIL,
      payload: {
        email,
      },
    };
    const actual = setContactEmail(email);

    expect(actual).toEqual(expected);
  });

  test("The setContact action", () => {
    const contact: Inputs = {
      name: "Hello!",
      message: "Goodbye!",
      email: "hello@gmail.com",
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

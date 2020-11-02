import { Inputs } from "../../Pages/Contact";
import {
  setContact,
  setContactBugs,
  setContactEmail,
  setContactLoading,
  SetContactLoadingPayload,
  setContactMessage,
  setContactName,
  SetContactPayload,
  setContactRating,
  SetContactRatingPayload,
  SET_CONTACT,
  SET_CONTACT_BUGS,
  SET_CONTACT_EMAIL,
  SET_CONTACT_LOADING,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_NAME,
  SET_CONTACT_RATING,
} from "./contact.actions";
import { ratings } from "../../Utils/types";

describe("The contact actions", () => {
  const stringTests = [
    {
      fn: setContactName,
      type: SET_CONTACT_NAME,
      key: "name",
    },
    {
      fn: setContactMessage,
      type: SET_CONTACT_MESSAGE,
      key: "message",
    },
    {
      fn: setContactEmail,
      type: SET_CONTACT_EMAIL,
      key: "email",
    },
    {
      fn: setContactBugs,
      type: SET_CONTACT_BUGS,
      key: "bugs",
    },
  ];
  stringTests.forEach(({ fn, type, key }) => {
    test(`The ${fn.name} action`, () => {
      const value = "Test";
      const expected = {
        type,
        payload: {
          [key]: value,
        },
      };

      const actual = fn(value);

      expect(actual).toEqual(expected);
    });
  });

  test("The setContactRating action", () => {
    ratings.forEach((rating) => {
      const expected: SetContactRatingPayload = {
        type: SET_CONTACT_RATING,
        payload: {
          rating,
        },
      };

      const actual = setContactRating(rating);

      expect(actual).toEqual(expected);
    });
  });

  test("The setContactLoading action", () => {
    const values = [true, false];

    values.forEach((loading) => {
      const expected: SetContactLoadingPayload = {
        type: SET_CONTACT_LOADING,
        payload: {
          loading,
        },
      };

      const actual = setContactLoading(loading);

      expect(actual).toEqual(expected);
    });
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

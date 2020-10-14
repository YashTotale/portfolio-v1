import { Inputs } from "../../../Components/Custom/ContactForm";
import {
  SetContactBugsPayload,
  SetContactEmailPayload,
  SetContactMessagePayload,
  SetContactNamePayload,
  SetContactPayload,
  SetContactRatingPayload,
  SetContactSuccessPayload,
  SET_CONTACT,
  SET_CONTACT_BUGS,
  SET_CONTACT_EMAIL,
  SET_CONTACT_MESSAGE,
  SET_CONTACT_NAME,
  SET_CONTACT_RATING,
  SET_CONTACT_SUCCESS,
} from "../../../Redux/actions/contact.actions";
import {
  contactReducer,
  initialContactState,
} from "../../../Redux/reducers/contact.reducers";
import { contact as originalState } from "../sampleStore";

describe("The contact reducer", () => {
  test("Sets contact name", () => {
    const name = "Test name";

    const fakeAction: SetContactNamePayload = {
      type: SET_CONTACT_NAME,
      payload: {
        name,
      },
    };

    const expected: typeof initialContactState = {
      ...originalState,
      name,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets contact message", () => {
    const message = "Test message";

    const fakeAction: SetContactMessagePayload = {
      type: SET_CONTACT_MESSAGE,
      payload: {
        message,
      },
    };

    const expected: typeof initialContactState = {
      ...originalState,
      message,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets contact email", () => {
    const email = "test@email.com";

    const fakeAction: SetContactEmailPayload = {
      type: SET_CONTACT_EMAIL,
      payload: {
        email,
      },
    };

    const expected: typeof initialContactState = {
      ...originalState,
      email,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets contact bugs", () => {
    const bugs = "Test bugs";

    const fakeAction: SetContactBugsPayload = {
      type: SET_CONTACT_BUGS,
      payload: {
        bugs,
      },
    };

    const expected: typeof initialContactState = {
      ...originalState,
      bugs,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets contact rating", () => {
    const rating = 2;

    const fakeAction: SetContactRatingPayload = {
      type: SET_CONTACT_RATING,
      payload: {
        rating,
      },
    };

    const expected: typeof initialContactState = {
      ...originalState,
      rating,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });

  test("Sets contact success", () => {
    const values = [true, false, null];

    values.forEach((success) => {
      const fakeAction: SetContactSuccessPayload = {
        type: SET_CONTACT_SUCCESS,
        payload: {
          success,
        },
      };

      const expected: typeof initialContactState = {
        ...originalState,
        success,
      };

      const actual = contactReducer(originalState, fakeAction);

      expect(actual).toEqual(expected);
    });
  });

  test("Sets contact", () => {
    const contact: Inputs = {
      name: "Test name",
      message: "Test message",
      email: "test@email.com",
      bugs: "Test bugs",
      rating: null,
    };

    const fakeAction: SetContactPayload = {
      type: SET_CONTACT,
      payload: {
        contact,
      },
    };

    const expected = {
      ...originalState,
      ...contact,
    };

    const actual = contactReducer(originalState, fakeAction);

    expect(actual).toEqual(expected);
  });
});

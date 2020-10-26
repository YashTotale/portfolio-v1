import {
  getContactName,
  getContactMessage,
  getContactEmail,
  getContactRating,
  getContactBugs,
  getContactLoading,
  getContactSuccess,
  getContact,
} from "./contact.selectors";
import { sampleState } from "../reducers";

describe("The contact selectors", () => {
  test("The getContactName selector", () => {
    const expected = sampleState.contact.name;
    const actual = getContactName(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactMessage selector", () => {
    const expected = sampleState.contact.message;
    const actual = getContactMessage(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactEmail selector", () => {
    const expected = sampleState.contact.email;
    const actual = getContactEmail(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactRating selector", () => {
    const expected = sampleState.contact.rating;
    const actual = getContactRating(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactBugs selector", () => {
    const expected = sampleState.contact.bugs;
    const actual = getContactBugs(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactLoading selector", () => {
    const expected = sampleState.contact.loading;
    const actual = getContactLoading(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContactSuccess selector", () => {
    const expected = sampleState.contact.success;
    const actual = getContactSuccess(sampleState);
    expect(actual).toEqual(expected);
  });

  test("The getContact selector", () => {
    const expected = sampleState.contact;
    const actual = getContact(sampleState);
    expect(actual).toEqual(expected);
  });
});

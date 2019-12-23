import {
  gotAdverts,
  setAdverts,
  createdAdvert,
  editedAdvert,
  createAdvert,
  getAdverts
} from "./actionCreators";
import { AdvertRepositoryFactory } from "../adverts/__mocks__/AdvertRepositoryFactory";

describe("actionCreators", () => {
  it("should return the type if you call gotAdverts", () => {
    const actual = gotAdverts();

    const expected = { type: "GOT_ADVERTS" };
    expect(actual).toEqual(expected);
  });

  it("should return a type when the function is called", () => {
    const actual = setAdverts({ adverts: "" });

    const expected = { type: "SET_ADVERTS", adverts: "" };
    expect(actual).toEqual(expected);
  });

  it("should return a type when the function is called", () => {
    const actual = createdAdvert();

    const expected = { type: "CREATED_ADVERT" };
    expect(actual).toEqual(expected);
  });

  it("should return a type when the function is called", () => {
    const actual = editedAdvert();

    const expected = { type: "EDITED_ADVERT" };
    expect(actual).toEqual(expected);
  });

  it("should dispatch necessary actions when creating advert", async () => {
    const dispatch = jest.fn();
    const advertFunction = createAdvert({ advert: "" });

    await advertFunction(dispatch);

    expect(dispatch).toBeCalledTimes(2);
  });

  it("should use the repository when creating an advert", async () => {
    const dispatch = jest.fn();
    const advertFunction = createAdvert({ advert: "" });

    await advertFunction(dispatch);

    expect(AdvertRepositoryFactory.create().create).toHaveBeenCalledWith("");
  });
});

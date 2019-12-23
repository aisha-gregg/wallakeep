import { reducer } from "./reducers";
import { State } from "./State";

describe("reducers", () => {
  it("should return the action type if there is a new user", () => {
    const action = { type: "SAVE_USER", user: "USER" };

    const expected = reducer(State.empty(), action);

    const actual = {
      adverts: [],
      user: "USER"
    };
    expect(actual).toEqual(expected);
  });
});

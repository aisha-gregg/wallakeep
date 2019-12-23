import React from "react";
import { AdvertCreate } from "./AdvertCreate";
import { render, fireEvent } from "@testing-library/react";
import { dispatch } from "react-redux";

jest.mock("react-redux", () => {
  const dispatch = jest.fn();
  return {
    useDispatch: jest.fn().mockReturnValue(dispatch),
    dispatch
  };
});

jest.mock("react-router-dom", () => ({
  useHistory: jest.fn()
}));

describe("AdvertCreate", () => {
  it("should dispatch an action when submitting", () => {
    const { getByRole } = render(<AdvertCreate />);

    const button = getByRole("button");
    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalled();
  });
});

import React from "react";
import { Button } from "./Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render the component", () => {
    const { container } = render(<Button></Button>);

    expect(container).toMatchSnapshot();
  });

  it("should render the component", () => {
    const mock = jest.fn();
    const { getByText } = render(<Button onClick={mock}>Test</Button>);
    const element = getByText("Test");

    fireEvent.click(element);

    expect(mock).toHaveBeenCalled();
  });
});

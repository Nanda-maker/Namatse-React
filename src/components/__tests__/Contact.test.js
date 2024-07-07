import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
describe("Contact us test case", () => {
  test("Should load Contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should load button input name component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox.length);
    expect(inputBox.length).toBe(2);
  });
});

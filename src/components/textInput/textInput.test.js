import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./tesxtInput";

describe("TextInput Component", () => {
  test("It should render text inputs initially with empty values", () => {
    const dummyProps = {
      placeholder: "Enter UserName",
      handleChange: jest.fn(),
      name: "userName",
      value: "",
      testId: "name-input",
      type: "text",
    };
    render(<TextInput {...dummyProps} />);
    expect(screen.getByTestId("name-input").value).toBe("");
  });
  test("It should trigger event handler on input change of name", () => {
    render(<TextInput />);

    userEvent.type(screen.getByRole("textbox"), "Hello{space}World");
    expect(screen.getByRole("textbox")).toHaveValue("Hello World");
  });
});

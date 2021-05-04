import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import Greetings from "./greetings";

describe("Greetings Component", () => {
  test('It should render Hello World !" text', () => {
    render(<Greetings />);
    const renderedText = screen.getByText("Hello World!");
    expect(renderedText).toBeInTheDocument();
  });

  test('It should render "Its good to see u" if button is not clicked', () => {
    render(<Greetings />);
    const renderedText = screen.getByText(/It's good to see u/i);
    expect(renderedText).toBeInTheDocument();
  });

  test('It should render "Change text" if button is clicked', () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");
    useEvent.click(buttonElement);
    const renderedText = screen.getByText(/change text/i);
    expect(renderedText).toBeInTheDocument();
  });

  test('It should not render "Good to see u" if the button was clicked', () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");
    useEvent.click(buttonElement);
    const renderedText = screen.queryByText("It's good to see u");
    expect(renderedText).toBeNull();
  });
});

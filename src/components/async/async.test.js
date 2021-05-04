import { render, screen } from "@testing-library/react";
import Async from "./async";

describe("Async Component", () => {
  test("It should render list of posts", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);
    const renderListofItems = await screen.findAllByRole("listitem");
    expect(renderListofItems).not.toBeNull();
  });
});

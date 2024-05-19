import Home from "../pages/Home";
import { screen } from "@testing-library/react";

describe("Homepage", () => {
  beforeAll(() => {
    render(<Home />);
  });

  test("homepage loads correctly", () => {
    const homepageText = screen.findByText("Hi, you're at the homepage!");
    expect(homepageText).toBeInTheDocument;
  });
});

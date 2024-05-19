import React from "react";
import { render, screen } from "@testing-library/react";
import user, { userEvent } from "@testing-library/user-event";
import { AddBook } from "../components";

describe("AddBook", () => {
  test("renders correctly", () => {
    render(<AddBook />);
    const libraryText = screen.getByText("The Library");
    expect(libraryText).toBeInTheDocument();
  });

  test("modal button is clicked", async () => {
    const user = userEvent.setup();

    const modalHandler = jest.fn();

    render(<AddBook toggleModal={modalHandler} />);
    const modalButton = screen.getByRole("button", { name: "Add a Book" });
    await user.click(modalButton);

    expect(modalHandler).toHaveBeenCalledTimes(1);
  });

  // test("modal is opened", () => {

  // });
});
// TODO test modal is opened
// TODO test modal is closed
// TODO test POST request is made on save

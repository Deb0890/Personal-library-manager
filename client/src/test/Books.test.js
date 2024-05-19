import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Books from "../pages/Books";
import { BrowserRouter as Router } from "react-router-dom";
import { AddBook } from "../components";
//ARRANGE, ACT, ASSERT

describe("Render AddBook component", () => {
  test("AddBook component is rendered onto the page", () => {
    render(<AddBook />);
    const getAddBookText = screen.getByText("Add a Book");
    expect(getAddBookText).toBeInTheDocument();
  });
});

describe("getting book data from the api", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("book data is fetched and displayed", async () => {
    const mockBooks = [
      {
        _id: "1",
        booktitle: "Test Book 1",
        authorfirstname: "JK",
        authorlastname: "Rowling",
        image: "image1.jpg",
      },
      {
        _id: "2",
        booktitle: "Test Book 2",
        authorfirstName: "Ernest",
        authorlastname: "Hemmingway",
        image: "image2.jpg",
      },
    ];

    fetch.mockResponseOnce(JSON.stringify(mockBooks));

    render(
      <Router>
        <Books />
      </Router>
    );

    await waitFor(() => {
      const bookText = screen.getByText("Test Book 1");
      expect(bookText).toBeInTheDocument();
    });
    await waitFor(() => {
      const bookText2 = screen.getByText("Test Book 2");
      expect(bookText2).toBeInTheDocument();
    });
  });

  test("displays no books message when fetch returns empty array", async () => {
    fetch.mockResponseOnce(JSON.stringify([]));

    render(
      <Router>
        <Books />
      </Router>
    );

    // Wait for the no books message to be displayed
    await waitFor(() => {
      const noBooksText = screen.getByText(
        "There are no books in your library!"
      );
      expect(noBooksText).toBeInTheDocument();
    });
  });
});
//TODO renders the AddBook component

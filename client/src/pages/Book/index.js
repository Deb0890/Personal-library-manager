import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const bookUrl = "/api/books/" + id;

  useEffect(() => {
    console.log("useEffect");
    const fetchBook = async () => {
      const response = await fetch(bookUrl);
      const data = await response.json();
      if (response.ok) {
        setBook(data);
      }
      console.log(data);
    };
    fetchBook();
  }, []);
  return <>{book ? <p>{book.id}</p> : null}</>;
};

export default Book;

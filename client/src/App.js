import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Books, Home, Book } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Book />} />
        </Routes>
      </div>
    </>
  );
};
export default App;

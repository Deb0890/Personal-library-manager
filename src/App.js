import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Books, Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  );
};
export default App;

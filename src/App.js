import React, { Component } from "react";
import "./App.css";
import { Header } from "./components";
import { Books } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Books />
    </>
  );
};
export default App;

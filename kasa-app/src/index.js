import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import IdChecker from "./components/IdChecker";
import Home from "./pages/Home";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Error from "./pages/Error";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/a-propos" element={<About />} />
      <Route
        path="/fiche-logement/:id"
        element={
          <IdChecker>
            <Accomodation />
          </IdChecker>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

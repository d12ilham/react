import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Main from "./Components/Main";
import Services from "./Components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

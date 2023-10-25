import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Why from "./pages/Why";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/why" element={<Why />} />
      </Routes>
    </>
  );
};

export default MyRoutes;

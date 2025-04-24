import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLayout from "./components/UserLayout";
import AboutProduct from "./pages/AboutProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutProduct" element={<AboutProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

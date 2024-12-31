import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";




const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />

        </Routes>
      </BrowserRouter>

  );
};

export default App;

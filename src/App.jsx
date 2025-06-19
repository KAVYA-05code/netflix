import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./Login";
import Success from "./Success";
import Fail from "./Fail";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
   
  );
}

export default App;

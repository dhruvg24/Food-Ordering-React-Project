import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route path = "*" element = {<Home />} />
          {/* by default it redirects to Home page */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from "./Navigation";
import CartPage from "./CartPage";
import Homepage from "./HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
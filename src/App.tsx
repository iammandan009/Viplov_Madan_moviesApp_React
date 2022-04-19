import React from "react";

import "./App.css";
import { Tabs } from "./components/Tabs";
import FavouriteList from "./components/FavouritesList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tabs />} />
        {/* <Route path="/favourites" element={<FavouriteList />}/> */}
      </Routes>
    </Router>
  );
}

export default App;

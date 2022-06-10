import "./index.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import LandingPage from "./pages/LandingPage/LandingPage";
import BusinessIntro from "./pages/BusinessIntro/BusinessIntro";
import MarketplaceLaunchpad from "./pages/Market/MarketplaceLaunchpad";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/business" element={<BusinessIntro />} />
          <Route path="/marketplace" element={<MarketplaceLaunchpad />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

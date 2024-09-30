import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import RoadmapPage from "./pages/RoadmapPage.jsx";
import { RoadmapProvider } from "./context/RoadmapContext.jsx";

import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

const App = () => {
  return (
    <RoadmapProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap/:id" element={<RoadmapPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/roadmap/:id" element={<RoadmapPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </RoadmapProvider>
  );
};

export default App;

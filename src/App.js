import "./App.css";

import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Hygiene from "./components/pages/Hygiene";
import React, { Fragment } from "react";
import Cookie from "./components/Cookie";
import ContactForm from "./components/ContactForm";
import {
  BrowserRouter,
  Routes,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";


function App() {
  // let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/deep-cleaning-services" element={<Services />} />
        </Routes>

        <Routes>
          <Route exact path="/other-services" element={<Services />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<ContactForm />} />
        </Routes>

        {/* <Hero />
        <Contact />
        <About />
        <Services />

        <Hygiene />
        <ContactForm />
        <Cookie />

        <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

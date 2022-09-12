import "./App.css";

import { BrowserRouter } from "react-router-dom";
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

function App() {
  // let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Contact />
        <About />
        <Services />

        <Hygiene />
        <ContactForm />
        <Cookie />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import Hero from "../Hero";
import Navbar from "../Navbar";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Hygiene from "./Hygiene";
import ContactForm from "../ContactForm";
import Cookie from "../Cookie";
import Footer from "../Footer";

export default function Home() {
  return (
    <div>
    
      {/* <Navbar /> */}
      <Hero />
      <Contact />
      <About />
      <Services />
      <Hygiene />
      <ContactForm />
      <Cookie />
      <Footer />
    </div>
  );
}

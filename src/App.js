import React from "react";
import Header from "./componants/header/Header";
import Navbar from "./componants/navbar/Navbar";
import About from "./componants/about/About";
import Experience from "./componants/experience/Experience";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/footer/Footer";
import Project from "./componants/projects/Project";
  
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

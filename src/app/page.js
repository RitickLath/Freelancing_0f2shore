import React from "react";
import Landing from "./components/Landing";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Landing />
      <div className="p-3 md:p-6">
        <Hero />
        <WhyUs />
        <Services />
        <FAQs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

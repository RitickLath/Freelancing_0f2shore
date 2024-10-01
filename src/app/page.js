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
    <div className="overflow-hidden">
      <Landing />
      <Hero />
      <div className="p-3 md:px-6 lg:px-20">
        <WhyUs />
        <Services />

        {/* <FAQs />
       
         */}
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

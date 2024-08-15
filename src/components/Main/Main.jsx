import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Footer from "../Footer/Footer";
import FeaturesSection from "../Features/featuresSection";
import Hero from "../HeroScetion/HeroSection";
import ServicesSection from "../ServicesSection/serviceSection";

const Main = () => {
   return (
      <div>

         <Header />
         <Hero />
         <Banner />
         <FeaturesSection />
         <ServicesSection />
         <TestimonialsSection />
        
         <Footer />
      </div>
   );
};

export default Main;

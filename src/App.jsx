import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
   
   <>
   
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <section id="FeatureSection"><FeatureSection/></section>
        <section id="Workflow"><Workflow/></section>
        <section id="Pricing"><Pricing/></section>
        <section id="Testimonials"><Testimonials/></section>
        <section id="Contact"><Contact/></section>
        
        
        
        <Footer />
      </div>
      
    </>
  );
};

export default App;

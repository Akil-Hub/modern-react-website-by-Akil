import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogo from './components/BrandLogo';
import PurposeSection from './components/PurposeSection';

import './App.css';
import CanvaLoginPage from './components/LoginPage';
import FeaturesSection from './components/FeaturesSection';
import ScheduleSection from './components/ScheduleSection';
import MonitorSection from './components/MonitorSection';
import PricingSection from './components/PricingSection';
import ServicesSection from './components/ServicesSection';
import TestimonialSection from './components/TestimonialSection';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>

        <div className="overflow-hidden">
          <Navbar />
          <Hero />
          <BrandLogo />
          <PurposeSection />
          {/* <CanvaLoginPage/> */}
          <FeaturesSection />
          <ScheduleSection />
          <MonitorSection/>
          <PricingSection/>
          <ServicesSection/>
          <TestimonialSection/>
          <NewsLetter/>
          <Footer/>
        </div>
      </main>
    </>
  );
};

export default App;

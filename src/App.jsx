import { Route, Routes } from 'react-router-dom'
import './App.css'
import CompanyLogo from './components/CompanyLogo'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import LoginPage from './components/LoginPage'


function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route
          path='/'
          element = {
            <>
             <Hero />
            <CompanyLogo />
            <PurposeSection />
            <FeaturesSection />
            <ScheduleSection />
            <MonitorSection />
            <PricingSection />
            <ServicesSection />
            <TestimonialSection/>
            <NewsLetter />
            <Footer />
  
            </>
          }
          
          />
          <Route path='login' element={<LoginPage/>}/>

        </Routes>
       
      </div>
    </main>
  )
}

export default App
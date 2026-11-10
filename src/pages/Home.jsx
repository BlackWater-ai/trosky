import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FacilityShowcase from '../components/FacilityShowcase';
import FacilityGlance from '../components/FacilityGlance';
import WhatYouCanDo from '../components/WhatYouCanDo';

import UpcomingEventsSlider from '../components/UpcomingEventsSlider';
import DayPassSection from '../components/DayPassSection';
import VIPSection from '../components/VIPSection';
import ProgramsSection from '../components/ProgramsSection';
import AboutSection from '../components/AboutSection';
import AmenitiesSection from '../components/AmenitiesSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import MembershipPromo from '../components/MembershipPromo';
import { PHOTOS } from '@/lib/photos';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection heroImage={PHOTOS.hero} />
      <MembershipPromo />
      <FacilityGlance />
      <FacilityShowcase />
      <WhatYouCanDo />
      <DayPassSection />
      <VIPSection />
      <UpcomingEventsSlider />
      <ProgramsSection />
      <AboutSection />
      <AmenitiesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
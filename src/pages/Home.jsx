import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventTypesSection from '../components/EventTypesSection';
import EventVenueSection from '../components/EventVenueSection';
import EventInquirySection from '../components/EventInquirySection';
import FirstVisitBanner from '../components/FirstVisitBanner';
import MobileEventAction from '../components/MobileEventAction';
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
    <div className="font-inter pb-24 lg:pb-0">
      <Navbar />
      <HeroSection heroImage={PHOTOS.facility} />
      <EventTypesSection />
      <EventVenueSection />
      <EventInquirySection />
      <UpcomingEventsSlider />
      <FirstVisitBanner />
      <MembershipPromo />
      <DayPassSection />
      <VIPSection />
      <ProgramsSection />
      <FacilityGlance />
      <FacilityShowcase />
      <WhatYouCanDo />
      <AboutSection />
      <AmenitiesSection />
      <PartnersSection />
      <ContactSection />
      <EventInquirySection final />
      <Footer />
      <MobileEventAction />
    </div>
  );
}
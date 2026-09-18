import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';
import Home from './pages/Home';
import Facility from './pages/Facility';
import DayPasses from './pages/DayPasses';
import Reservations from './pages/Reservations';
import EventsRedirect from './pages/EventsRedirect';
import Coaches from './pages/Coaches';
import PartnerWithUs from './pages/PartnerWithUs';
import ContactUs from './pages/ContactUs';
import Camps from './pages/Camps';
import Gallery from './pages/Gallery';
import OurStory from './pages/OurStory';
import Partners from './pages/Partners';
import Policies from './pages/Policies';
import VIP from './pages/VIP';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/day-passes" element={<DayPasses />} />
        <Route path="/memberships" element={<DayPasses />} />
        <Route path="/day-passes-memberships" element={<DayPasses />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/events" element={<EventsRedirect />} />
        <Route path="/events-venue" element={<EventsRedirect />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/partner-with-trosky" element={<PartnerWithUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

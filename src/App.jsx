import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import Seo from './components/Seo';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import Policies from './pages/Policies';
import Reservations from './pages/Reservations';
import Camps from './pages/Camps';
import EventsRedirect from './pages/EventsRedirect';
import VIP from './pages/VIP';
import Coaches from './pages/Coaches';
import Partners from './pages/Partners';
import ContactUs from './pages/ContactUs';
import DayPasses from './pages/DayPasses';
import PartnerWithTrosky from './pages/PartnerWithTrosky';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about" element={<OurStory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/camps" element={<Camps />} />
        <Route path="/events" element={<EventsRedirect />} />
        <Route path="/events-venue" element={<EventsRedirect />} />
        <Route path="/vip" element={<VIP />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/day-passes" element={<DayPasses />} />
        <Route path="/memberships" element={<DayPasses />} />
        <Route path="/partner-with-trosky" element={<PartnerWithTrosky />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

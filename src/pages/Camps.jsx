import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageHero, FinalCTA } from '../components/PageSections';
import { PHOTOS } from '@/lib/photos';

const offerings = [
  { title: 'Multi-Sport Camps', body: 'Fun, structured camp programs for kids across multiple sports. Build skills, make friends, and stay active.' },
  { title: 'Summer Camps', body: 'Seasonal morning and afternoon sessions on courts and turf.' },
  { title: 'School Break Camps', body: 'Keep kids moving during holidays and breaks with coach-led programming.' },
  { title: 'Sport-Specific Camps', body: 'Pickleball, padel, soccer, and more — focused skill development in a camp format.' },
];

export default function Camps() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <ImageHero
        kicker="Programs"
        title="Youth Camps & Clinics"
        subtitle="Multi-sport and sport-specific youth camps built around movement, teamwork, confidence, and fun."
        image={PHOTOS.turf}
      >
        <Link
          to="/contact-us"
          className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 inline-flex items-center justify-center gap-2"
        >
          Inquire About Camp Start Dates <ArrowRight className="w-4 h-4" />
        </Link>
      </ImageHero>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {offerings.map((item) => (
            <div key={item.title} className="bg-secondary border border-border rounded-xl p-8">
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-3">{item.title}</h3>
              <p className="font-inter text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA title="Looking for Upcoming Dates?" body="Submit a camp inquiry and we’ll share the latest schedule and details." label="Contact Us" />
      <Footer />
    </div>
  );
}

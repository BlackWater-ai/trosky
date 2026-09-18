import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageHero, FinalCTA } from '../components/PageSections';
import { PHOTOS } from '@/lib/photos';

const events = [
  { tag: 'Open Play', title: 'Open Play Night', when: 'Every Friday · 6:00 PM – 10:00 PM', desc: 'Join us for open play, games, and community time at the facility.' },
  { tag: 'Camps', title: 'Youth Sports Camp', when: 'Seasonal · Morning & Afternoon Sessions', desc: 'Multi-sport camp opportunities for kids and young athletes.' },
  { tag: 'Community', title: 'Movie Night on the Turf', when: 'Monthly · 8:00 PM – 11:00 PM', desc: 'A community movie night experience on the turf field with the large outdoor screen.' },
  { tag: 'Pickleball', title: 'Pickleball Social', when: 'Every Saturday · 10:00 AM – 1:00 PM', desc: 'Casual pickleball play, music, and hangout time.' },
  { tag: 'Tournament', title: 'Tournament Coming Soon', when: 'TBD · All Day', desc: 'Upcoming competitive and community tournament events.' },
  { tag: 'Private Events', title: 'Private Event Availability', when: 'Year Round · Flexible Scheduling', desc: 'Ask about renting the venue for parties, corporate events, and group gatherings.' },
];

export default function Events() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <ImageHero
        kicker="Events / Venue"
        title="What’s Happening at Trosky"
        subtitle="Open play, socials, camps, movie nights, and private venue rentals — all on the same 2.5-acre compound."
        image={PHOTOS.deck}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-secondary border border-border rounded-xl p-7">
              <span className="font-inter text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                {event.tag}
              </span>
              <h3 className="font-display text-2xl text-foreground tracking-wider mt-4 mb-2">{event.title}</h3>
              <p className="font-inter text-xs text-muted-foreground uppercase tracking-wide mb-3">{event.when}</p>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">Host an Event at Trosky</h2>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
            Celebrations, corporate outings, watch parties, team gatherings, and community events. Submit an inquiry
            and our team will help with availability and details.
          </p>
          <Link
            to="/contact-us"
            className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
          >
            Event / Venue Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FinalCTA title="Have a Date in Mind?" body="Tell us about your gathering and we’ll route you to the right team member." label="Contact Us" />
      <Footer />
    </div>
  );
}

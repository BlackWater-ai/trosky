import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageHero, FinalCTA } from '../components/PageSections';
import { FLUID_BOOKING } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

const areas = [
  { title: 'Pickleball & Padel Courts', body: '8 pickleball / padel courts for open play, reservations, lessons, clinics, tournaments, and social events.', img: PHOTOS.courts },
  { title: 'Multi-Sport Turf Field', body: 'Soccer, lacrosse, volleyball (2 nets), kickball, flag football, open play, youth camps, leagues, and field rentals.', img: PHOTOS.turf },
  { title: 'VIP Container Rooms', body: 'Private, air-conditioned spaces with TVs for groups, members, and event guests.', img: PHOTOS.vipLounge },
  { title: 'Cold Plunges & Recovery', body: 'Cold plunge stations, sauna, massage chair, and an outdoor calisthenics gym.', img: PHOTOS.coldPlunge },
  { title: 'BBQ & Hangout Areas', body: 'Outdoor grilling and hangout spaces for events and casual days.', img: PHOTOS.hangout },
  { title: 'Pro Shop & Snack Bar', body: 'Gear, equipment, and essentials plus comfortable lounge space and grab-and-go snacks.', img: PHOTOS.snackBar },
];

const amenities = [
  { title: 'Cold Plunges', desc: 'Recovery-focused cold water immersion stations.' },
  { title: 'VIP Container Rooms', desc: 'Private, air-conditioned spaces with TVs for groups and members.' },
  { title: 'BBQ Areas', desc: 'Outdoor grilling and hangout spaces for events and casual days.' },
  { title: 'Outdoor Calisthenics Gym', desc: 'Dips, pull-ups, monkey bars, and open-air fitness equipment.' },
  { title: 'Large Outdoor Screen', desc: 'Movie nights, watch parties, and community events on the big screen.' },
  { title: 'Dog-Friendly', desc: 'Bring the whole family — including your four-legged members.' },
  { title: 'Pro Shop', desc: 'Grab gear, equipment, and essentials on site.' },
  { title: 'Food Truck Area', desc: 'Rotating food trucks and local vendors on-site.' },
  { title: 'Lounge & Hangout Areas', desc: 'Comfortable spaces to relax, socialize, and watch the action.' },
  { title: 'Massage Chair', desc: 'On-site recovery amenity for members and guests.' },
  { title: 'Family-Friendly Layout', desc: 'Designed for athletes, parents, kids, and groups of all sizes.' },
  { title: 'Outdoor Environment', desc: 'Open-air, landscaped grounds that feel like a true sports destination.' },
];

export default function Facility() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <ImageHero
        kicker="The Grounds"
        title={<>A 2.5 Acre Sports & Event Compound</>}
        subtitle="One venue with endless possibilities. From sports courts to event spaces, every corner of Trosky Sports Club is built to be used and enjoyed."
        image={PHOTOS.turf}
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={FLUID_BOOKING}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-white/90 inline-flex items-center justify-center gap-2"
          >
            Book a Court <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/contact-us"
            className="border border-white/50 text-white px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-white/10 inline-flex items-center justify-center gap-2"
          >
            Schedule a Facility Tour
          </Link>
        </div>
      </ImageHero>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {areas.map((area, i) => (
            <div key={area.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>img]:order-first' : ''}`}>
              <div>
                <h2 className="font-display text-4xl text-foreground tracking-wider mb-4">{area.title}</h2>
                <p className="font-inter text-muted-foreground text-lg leading-relaxed">{area.body}</p>
              </div>
              <img src={area.img} alt={area.title} className="w-full h-80 object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-3 font-medium">On-Site</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">Amenities Built Around the Experience</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-display text-xl text-foreground tracking-wider mb-2">{item.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Want a Walkthrough?"
        body="Schedule a tour and see the courts, turf, VIP spaces, and hangout areas in person."
        label="Schedule a Tour"
      />
      <Footer />
    </div>
  );
}

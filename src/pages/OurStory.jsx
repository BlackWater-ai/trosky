import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageHero, FinalCTA } from '../components/PageSections';
import { PHOTOS } from '@/lib/photos';
import { STORY_VIDEO } from '@/lib/constants';

const values = [
  { title: 'Family First', body: 'Built by a family, for families. Kids, parents, and athletes all belong here.' },
  { title: 'Community', body: 'A place where people come together, stay active, and leave richer than they arrived.' },
  { title: 'Competition', body: 'We love sports and competition — and we believe everyone deserves a great place to play.' },
  { title: 'Wellness', body: 'From cold plunges to open air training, wellness is built into everything we do.' },
];

export default function OurStory() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <ImageHero
        kicker="Who We Are"
        title="More Than a Sports Facility"
        subtitle="A place to play, gather, train, and grow. Built for families, athletes, teams, and the entire Austin community."
        image={PHOTOS.clubhouse}
      />

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-6">
            Austin&apos;s Community Sports & Event Destination.
          </h2>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-6">
            Trosky Sports Club is a 2.5-acre outdoor facility in Austin, TX built for families, athletes, teams, and
            the community. Come to play, train, host an event, or just hang out.
          </p>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
            Day passes, court bookings, youth camps, and event rentals are available to everyone. No membership required
            to enjoy the facility.
          </p>
          <blockquote className="border-l-2 border-primary pl-6 font-display text-2xl tracking-wide text-foreground mb-10">
            “A place where people come together, stay active, and leave richer than they were yesterday.”
          </blockquote>
          <a
            href={STORY_VIDEO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-inter font-bold text-sm tracking-wider uppercase text-primary"
          >
            Watch Our Story <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value) => (
            <div key={value.title} className="bg-white border border-border rounded-xl p-7">
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-3">{value.title}</h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/day-passes"
            className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm inline-flex items-center justify-center gap-2"
          >
            Buy a Day Pass
          </Link>
          <Link
            to="/contact-us"
            className="border border-border px-8 py-4 font-inter font-semibold text-sm tracking-wider uppercase rounded-sm inline-flex items-center justify-center gap-2"
          >
            Schedule a Tour
          </Link>
        </div>
      </section>

      <FinalCTA title="Come Be Part of It" body="Play, train, host, or hang out — Trosky is built for the whole community." />
      <Footer />
    </div>
  );
}

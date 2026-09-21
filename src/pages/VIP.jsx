import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImageHero, FinalCTA } from '../components/PageSections';
import { FLUID_VIP, FLUID_VIP_FAMILY } from '@/lib/constants';
import { PHOTOS } from '@/lib/photos';

const vip = [
  'Access for 1 adult',
  'Guest passes each month',
  'Daily court bookings (1 booking per day, 2 hour max)',
  'Unlimited facility access',
  'Private locker rooms',
  'Free sauna & cold plunge',
  'Free equipment rentals',
  'Free VIP sections',
  '10 day booking window',
  '24 hour booking cancellation window',
];

const family = [
  'Access for 2 adults 18+',
  'Kids 13 years or younger included',
  'Guest passes each month',
  'Daily court bookings (1 booking per day, 2 hour max)',
  'Unlimited facility access',
  'Private locker rooms',
  'Free sauna & cold plunge',
  'Free equipment rentals',
  'Free VIP sections',
  '10 day booking window',
];

export default function VIP() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <ImageHero
        kicker="Membership"
        title="VIP Memberships"
        subtitle="Premium access for guests and families who want priority booking, premium amenities, and the full Trosky Sports Club experience."
        image={PHOTOS.vipLounge}
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-border rounded-xl p-8">
            <p className="font-inter text-xs tracking-widest uppercase text-muted-foreground mb-2">Individual</p>
            <h2 className="font-display text-4xl tracking-wider mb-2">VIP Membership</h2>
            <p className="font-display text-3xl text-primary mb-6">$299.99/month</p>
            <ul className="space-y-2 mb-8">
              {vip.map((item) => (
                <li key={item} className="font-inter text-sm text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
            <a
              href={FLUID_VIP}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
            >
              Choose VIP <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-white border border-primary/30 rounded-xl p-8">
            <p className="font-inter text-xs tracking-widest uppercase text-primary mb-2">Family</p>
            <h2 className="font-display text-4xl tracking-wider mb-2">VIP Family</h2>
            <p className="font-display text-3xl text-primary mb-6">$499.99/month</p>
            <ul className="space-y-2 mb-8">
              {family.map((item) => (
                <li key={item} className="font-inter text-sm text-muted-foreground">
                  • {item}
                </li>
              ))}
            </ul>
            <a
              href={FLUID_VIP_FAMILY}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 font-inter font-bold text-xs tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
            >
              Choose Family VIP <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTA title="Not Sure Which Plan Fits?" body="Tell us how you use the club and we’ll help you choose between day passes, Advantage, and VIP." />
      <Footer />
    </div>
  );
}

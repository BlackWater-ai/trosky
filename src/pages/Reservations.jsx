import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';
import { FLUID_BOOKING } from '@/lib/constants';

export default function Reservations() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Play"
        title="Reservations"
        subtitle="Court and field reservations are handled through Fluid, Trosky’s booking platform. Book pickleball, padel, turf time, and more."
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-3xl text-foreground tracking-wider mb-4">How Booking Works</h2>
            <ol className="space-y-4 font-inter text-muted-foreground leading-relaxed mb-8">
              <li>
                <span className="font-semibold text-foreground">1. Open Fluid.</span> All court, field, coach, membership,
                and day pass bookings run through Fluid.
              </li>
              <li>
                <span className="font-semibold text-foreground">2. Pick a time.</span> Choose pickleball, padel, or turf
                availability that fits your group.
              </li>
              <li>
                <span className="font-semibold text-foreground">3. Show up and play.</span> Arrive, check in, and enjoy
                the facility. Premium add-ons like VIP lounges and cold plunge can be reserved separately.
              </li>
            </ol>
            <a
              href={FLUID_BOOKING}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm hover:opacity-90 inline-flex items-center gap-2"
            >
              Open Fluid Booking <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Need Help With a Booking?"
        body="Questions about group reservations, leagues, or team training? Reach out and we’ll point you to the right option."
        label="Contact Us"
      />
      <Footer />
    </div>
  );
}

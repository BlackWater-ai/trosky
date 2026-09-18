import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';

const sections = [
  {
    title: 'Membership Cancellation Policy',
    items: [
      'Memberships may be canceled by notifying Trosky Sports Club at least 7 days before the next pay cycle without being billed again.',
      'Cancellation requests must be made in person or by calling Trosky Sports Club.',
      'Membership fees already processed are non-refundable.',
      'Memberships are non-transferable.',
    ],
  },
  {
    title: 'Day Pass Guest Policy',
    items: [
      'Each Group Day Pass includes entry for you plus up to 3 different guests.',
      'The same guest cannot be brought in twice under the same Group Day Pass offer.',
      'The Individual Day Pass includes one full-day admission for one guest only.',
    ],
  },
  {
    title: 'Pets',
    items: [
      'Pets are allowed but must remain controlled and cleaned up after.',
      'Aggressive or disruptive animals are not permitted.',
    ],
  },
  {
    title: 'Facility Use',
    items: [
      'Court reservations, VIP lounges, events, cold plunge and sauna access, rentals, and other premium experiences may require a separate reservation or fee.',
      'Guests are expected to respect other players, families, and the grounds.',
    ],
  },
];

export default function Policies() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Policies"
        title="Club Policies"
        subtitle="A few house rules so everyone — families, athletes, and teams — can enjoy Trosky."
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="bg-white border border-border rounded-xl p-8">
              <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="font-inter text-sm text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA title="Questions About a Policy?" body="Reach out and we’ll help clarify memberships, day passes, and facility use." />
      <Footer />
    </div>
  );
}

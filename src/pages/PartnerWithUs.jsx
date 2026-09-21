import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';

const categories = [
  { title: 'Food & Drinks', items: ['Local Food Trucks', 'Grab & Go Vendors', 'Beverage Partners'] },
  { title: 'Wellness', items: ['Massage Therapists', 'Mobile IV Partners', 'Recovery Specialists'] },
  { title: 'Training & Coaching', items: ['Independent Trainers', 'Sport-Specific Coaches', 'Fitness Affiliates'] },
  { title: 'Events & Vendors', items: ['Event Photographers', 'DJ & Entertainment', 'Sponsor Partners'] },
];

export default function PartnerWithUs() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Partner With Us"
        title="Grow With Trosky"
        subtitle="Sponsorship, advertising, vendor, and partnership opportunities throughout the facility and at future events."
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white border border-border rounded-xl p-7">
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="font-inter text-sm text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl text-foreground tracking-wider mb-4">Sponsorship & Advertising Inquiries</h2>
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
            Whether you&apos;re a food truck, mobile coffee vendor, local business, or looking for facility-wide
            sponsorship or advertising opportunities — we&apos;d love to connect and explore how we can grow together
            in the Austin community.
          </p>
          <Link
            to="/contact-us"
            className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
          >
            Vendor / Partnership Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FinalCTA title="Let’s Build Together" body="Submit a partnership inquiry and our team will follow up with more information." />
      <Footer />
    </div>
  );
}

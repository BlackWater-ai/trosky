import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';

export default function Partners() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Community"
        title="Sponsors, Partners & Vendors"
        subtitle="Interested in partnering with Trosky Sports Club? We offer sponsorship, advertising, vendor, and partnership opportunities throughout the facility and at future events."
      />

      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-inter text-muted-foreground text-lg leading-relaxed mb-8">
            Food trucks, wellness providers, coaches, and local businesses help make Trosky a full community
            destination. Partner profiles will be added here as collaborations are confirmed.
          </p>
          <Link
            to="/partner-with-us"
            className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm inline-flex items-center gap-2"
          >
            Partner With Trosky <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FinalCTA title="Want to Be Featured Here?" body="Submit a vendor or partnership inquiry and our team will follow up." />
      <Footer />
    </div>
  );
}

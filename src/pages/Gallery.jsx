import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PageHeader, FinalCTA } from '../components/PageSections';
import { GALLERY } from '@/lib/photos';

export default function Gallery() {
  return (
    <div className="font-inter bg-background">
      <Navbar />
      <PageHeader
        kicker="Gallery"
        title="A Look Around Trosky"
        subtitle="Courts, turf, VIP spaces, hangout areas, and the clubhouse — a snapshot of Austin’s community sports compound."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-xl bg-secondary min-h-[240px]">
              <img src={photo.src} alt={photo.alt} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
            </figure>
          ))}
        </div>
      </section>

      <FinalCTA title="See It In Person" body="Schedule a facility tour and walk the grounds with our team." label="Schedule a Tour" />
      <Footer />
    </div>
  );
}

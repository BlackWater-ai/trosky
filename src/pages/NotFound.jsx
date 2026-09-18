import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="font-inter bg-background min-h-screen">
      <Navbar />
      <section className="pt-40 pb-32 text-center px-6">
        <p className="font-inter text-sm tracking-[0.3em] text-primary uppercase mb-4 font-medium">404</p>
        <h1 className="font-display text-6xl text-foreground tracking-wider mb-4">Page Not Found</h1>
        <p className="font-inter text-muted-foreground mb-8">That page doesn’t exist on the Trosky Sports Club site.</p>
        <Link
          to="/"
          className="bg-primary text-primary-foreground px-8 py-4 font-inter font-bold text-sm tracking-wider uppercase rounded-sm inline-flex"
        >
          Return Home
        </Link>
      </section>
      <Footer />
    </div>
  );
}

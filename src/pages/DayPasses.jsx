import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DayPassSection from '../components/DayPassSection';

export default function DayPasses() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <DayPassSection />
      </main>
      <Footer />
    </>
  );
}
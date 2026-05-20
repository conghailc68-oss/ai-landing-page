import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppsSection from './components/AppsSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      <Navbar />
      <main>
        <Hero />
        <AppsSection />
        <Features />
        <Gallery />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

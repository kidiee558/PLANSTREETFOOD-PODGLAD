import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-plan-light font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  );
}

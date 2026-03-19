import { APIProvider } from '@vis.gl/react-google-maps';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

export default function App() {
  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <div className="min-h-screen bg-plan-light font-body overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menu />
        <Gallery />
        <Reviews />
        <Footer />
      </div>
    </APIProvider>
  );
}

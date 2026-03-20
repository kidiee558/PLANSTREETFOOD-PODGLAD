import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import StudioPage from '../app/studio/[[...index]]/page';

function Home() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/studio/*" element={<StudioPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

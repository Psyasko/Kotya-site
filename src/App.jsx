import { LeafBranch } from './components/Decor';
import DragonRoute from './components/DragonRoute';
import { useReveal } from './hooks/useReveal';
import About from './sections/About';
import Booking from './sections/Booking';
import Certificates from './sections/Certificates';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Studio from './sections/Studio';

function App() {
  useReveal();

  return (
    <div className="app">
      <div className="site-background" aria-hidden="true">
        <div className="site-background__photo" />
        <div className="site-background__glow site-background__glow--one" />
        <div className="site-background__glow site-background__glow--two" />
        <LeafBranch className="site-leaf site-leaf--left" />
        <LeafBranch className="site-leaf site-leaf--right" />
      </div>

      {/* Спільні градієнти для органічних форм карток. */}
      <svg className="svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="organicFill" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#0d3a1c" stopOpacity="0.94" />
            <stop offset="1" stopColor="#04150b" stopOpacity="0.96" />
          </linearGradient>
          <radialGradient id="organicGlow" cx="0.22" cy="0" r="0.9">
            <stop offset="0" stopColor="#fff3a3" stopOpacity="0.1" />
            <stop offset="1" stopColor="#fff3a3" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <DragonRoute />

      <div className="page-shell">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Studio />
          <Booking />
          <Certificates />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

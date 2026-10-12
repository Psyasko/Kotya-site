import { DragonRoute, LeafBranch } from './components/Decor';
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

      <div className="page-shell">
        <DragonRoute />
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

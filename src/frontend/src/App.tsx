import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CoreTeam from './components/CoreTeam';
import Products from './components/Products';
import FarmerSupport from './components/FarmerSupport';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="team">
          <CoreTeam />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="farmer-support">
          <FarmerSupport />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

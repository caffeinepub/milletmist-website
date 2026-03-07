import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import CoreTeam from "./components/CoreTeam";
import FarmerSupport from "./components/FarmerSupport";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

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

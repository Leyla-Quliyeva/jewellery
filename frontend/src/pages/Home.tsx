import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <NewArrivals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

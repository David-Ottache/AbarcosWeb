import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Ourteam from "./components/Ourteam";
import Footer from "./components/Footer";
import ContactUs from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Ourproducts from "./components/Ourproducts";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-8xl mx-auto pt-20 px-6">
        <HeroSection />
        <Aboutus/>
        <FeatureSection />
        <Ourproducts/>
        <Ourteam />
        <ContactUs/>
        
        <Footer />
      </div>
    </>
  );
};

export default App;

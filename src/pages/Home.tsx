import  HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import ServicesSection1 from "../components/ServiceSection1";
import AboutUsSection1 from "../components/Aboutussection1";
import ServicesSection2 from "../components/ServiceSection2";
import WhyUsSection from "../components/Whyussection";
import Bestplan from "../components/Bestplan";
import TeamSection from "../components/Teammembers";
import WhyUsSection2 from "../components/Whyussection2";
import BrandsSection from "../components/Brandsection";
import TestimonialsSection from "../components/Testinomialsection";
import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ServicesSection1 />
      <AboutUsSection1 />
      <ServicesSection2 />
      <WhyUsSection />
      <Bestplan />
      <TeamSection />
      <WhyUsSection2 />
      <BrandsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default Home;
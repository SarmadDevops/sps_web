import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import InsuranceDetailsSection from "../components/Insurancedetailssection";
import Navbar from "../components/Navbar";

const Kafala = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Kafalaheroimage.png"
        title={
          <>
            Kafala Insurance
            <br />
            Form
          </>
        }
        isKafalaPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Kafala;

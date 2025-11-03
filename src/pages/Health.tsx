import FAQSection from "../components/FAQsection";
import Footer from "../components/Footer";
import HealthInfoSection from "../components/Healthinfosection";
import HeroSection from "../components/Hero";
import InsuranceDetailsSection from "../components/Insurancedetailssection";
import Navbar from "../components/Navbar";
import TestimonialsSection from "../components/Testinomialsection";
import VehicleInfoHeader from "../components/VehicleInfoHeader";

const Health = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Healthinsuarnceimage.jpg"
        title={
          <>
            Health Insurance
            <br />
            Policy
          </>
        }
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />

      <VehicleInfoHeader
        vehicleType="health"
        title={
          <>
            Up to 50% Off* on
            <br />
            Health Insurance
          </>
        }
        subtitle="We are a professional and creative company and we offer you a trusty insurance on
        your vehicle."
        vehicleImage="/Healthicon.png"
      />
      <HealthInfoSection />
      <InsuranceDetailsSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default Health;

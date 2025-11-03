import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import VehicleInfoHeader from "../components/VehicleInfoHeader";
import TravelInfoSection from "../components/TravelInfoSection";
import InsuranceDetailsSection from "../components/Insurancedetailssection";
import FAQSection from "../components/FAQsection";
import  Footer from "../components/Footer";

const Travel = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        backgroundImage="/Heroimage2.png"
        title={
          <>
            Travel Insurance
            <br />
            Policy
          </>
        }
        isCarPage={true}
        height="h-[400px] md:h-[450px] lg:h-[500px]"
        titleSize="text-4xl md:text-5xl"
      />

      <VehicleInfoHeader
        vehicleType="travel"
        title={
          <>
            Up to 50% Off* on
            <br />
            Travel Insurance
          </>
        }
        subtitle="We are a professional and creative company and we offer you a trusty insurance on
        your travel adventures."
        vehicleImage="/Travelicon.png"
      />
      <TravelInfoSection />
      <InsuranceDetailsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Travel;

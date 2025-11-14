import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Service type
interface Service {
  id: string;
  iconSrc: string;
  title: string;
  features: string[];
  route: string;
}

const services: Service[] = [
  { id: "01", iconSrc: "/caricon.png", title: "Car Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/car" },
  { id: "02", iconSrc: "/Healthicon.png", title: "Health Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/health" },
  { id: "03", iconSrc: "/motorcycleicon.png", title: "Bike Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/bike" },
  { id: "04", iconSrc: "/Travelicon.png", title: "Travel Insurance", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/travel" },
  { id: "05", iconSrc: "/travel-icon.png", title: "IT Services", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/it-consulting" },
  { id: "06", iconSrc: "/takaful-icon.png", title: "Takaful", features: ["Vacuum / mop floors", "Dust all furniture", "Clean the toilet"], route: "/takaful" },
];

const ServicesSection: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(services.length / cardsPerPage);

  const handleDotClick = (index: number) => setPage(index);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="w-full bg-[#F5F8Fc] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-12">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#1A3970] text-sm md:text-base font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Services We Offered</h2>
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden w-full mb-6">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {services.map((service: Service) => (
              <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                <div
                  className="group bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center
                     transition-all duration-500 hover:bg-[#1894A4] hover:text-white"
                >
                  {/* Icon */}
                  <img
                    src={service.iconSrc}
                    alt={service.title}
                    className={`w-16 h-16 mb-4 transition-all duration-500
                      ${service.id === "02" ? "filter brightness-0" : ""}
                      group-hover:filter group-hover:brightness-0 group-hover:invert`}
                  />

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-1 transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Features */}
                  <ul className="text-gray-600 mb-4 text-sm space-y-1 transition-colors duration-500 group-hover:text-white">
                    {service.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-[#1894A4] transition-colors duration-500 group-hover:text-white">✔</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    to={service.route}
                    className="border border-[#1894A4] text-[#1894A4] px-4 py-2 rounded
                               transition-colors duration-500 group-hover:bg-white group-hover:text-[#1894A4]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer transition-all duration-300 ${
                page === i
                  ? "bg-[#1894A4] w-10 h-3 rounded-full"
                  : "bg-gray-300 w-3 h-3 rounded-full hover:bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

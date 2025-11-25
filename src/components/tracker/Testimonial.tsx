import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  rating: number; 
  imageSrc: string;
}

const testimonialsData: Testimonial[] = [
  { id: 1, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "A", title: "Customer", rating: 5, imageSrc: "/testimonial1.jpg" },
  { id: 2, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "B", title: "Senior Consultant", rating: 4, imageSrc: "/testimonial2.jpg" },
  { id: 3, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "C", title: "Managing Director", rating: 5, imageSrc: "/testimonial3.jpg" },
  { id: 4, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "D", title: "Customer", rating: 4, imageSrc: "/testimonial1.jpg" },
  { id: 5, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "E", title: "Manager", rating: 5, imageSrc: "/testimonial2.jpg" },
  { id: 6, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "F", title: "Manager", rating: 5, imageSrc: "/testimonial2.jpg" },
  { id: 7, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "G", title: "Customer", rating: 4, imageSrc: "/testimonial3.jpg" },
  { id: 8, quote: "A logistic service provider company plays a pivotal role in the global supply chain...", name: "H", title: "Manager", rating: 5, imageSrc: "/testimonial2.jpg" },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-teal-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.055 8.72c-.784-.57-.382-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const stars = Array(5).fill(0).map((_, i) => <StarIcon key={i} filled={i < testimonial.rating} />);

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl border-t-8 border-[#1894A4] flex flex-col justify-between relative pt-16 min-h-[280px]">
      {/* Circle Image */}
      <div className="absolute -top-1 right-6 z-10">
        <img
          className="w-16 h-16 rounded-full object-cover ring-4 ring-[#1894A4] shadow-lg"
          src={testimonial.imageSrc}
          alt={testimonial.name}
        />
      </div>

      {/* Quote */}
      <div className="text-4xl text-[#1894A4] mb-4 font-serif">“</div>
      <p className="text-gray-900 text-sm mb-6 flex-grow">{testimonial.quote}</p> {/* <-- Color changed to black */}

      {/* Name, Title, Stars */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="font-bold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
        <div className="flex space-x-1">{stars}</div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slideStep, setSlideStep] = useState(1);

  const totalCards = testimonialsData.length;

  const updateLayout = () => {
    if (window.innerWidth < 640) { 
      setCardsPerPage(1); 
      setSlideStep(1);
    } else if (window.innerWidth < 1024) { 
      setCardsPerPage(2); 
      setSlideStep(1);
    } else { 
      setCardsPerPage(3); 
      setSlideStep(1);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + slideStep) % totalCards);
    }, 700);
    return () => clearInterval(interval);
  }, [slideStep, totalCards]);

  const cardWidthPercent = 100 / cardsPerPage;

  return (
    <section className="py-12 relative overflow-hidden w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-[72px]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-2">
    <img src="/splogo.png" className="w-12 h-12" alt="SP Logo" />
    <span className="text-[#1894A4] font-bold uppercase text-sm md:text-base">
      Testimonials
    </span>
  </div>

        {/* Slider */}
        <div className="overflow-hidden w-full mb-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPercent}%)` }}
          >
            {testimonialsData.concat(testimonialsData.slice(0, cardsPerPage)).map((testimonial, idx) => (
              <div key={idx} className="flex-shrink-0 px-1" style={{ width: `${cardWidthPercent}%` }}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: Math.ceil(totalCards / slideStep) }).map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentIndex(i * slideStep)}
              className={`cursor-pointer transition-all duration-300 ${
                currentIndex === i * slideStep
                  ? "bg-[#1894A4] w-4 h-1 rounded-full lg:w-6 lg:h-2"
                  : "bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 lg:w-3 lg:h-3"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

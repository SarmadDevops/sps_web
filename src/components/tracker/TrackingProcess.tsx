// import React from "react";

// type StepCardProps = {
//   title: string;
//   text: string;
//   iconImage: string;
//   imageUrl: string;
//   showArrow?: boolean;
// };

// /* -----------------------------------
//    CARD WITH EXACT SIZE (300 × 268px)
// ------------------------------------ */
// const StepCard: React.FC<StepCardProps> = ({
//   title,
//   text,
//   iconImage,
//   imageUrl,
//   showArrow = true,
// }) => {
//   return (
//     <div
//       className="
//         relative flex-shrink-0 
//         w-[300px] sm:w-[250px] 
//         h-[268px] sm:h-[250px]      /* ← exact height */
//         rounded-3xl overflow-hidden shadow-2xl 
//         snap-center bg-[#1A3970]
//       "
//       style={{
//         backgroundImage: `url(${imageUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-[#1A3970]/95" />

//       {/* Icon + Arrow */}
//       <div className="absolute top-4 left-4 flex items-center z-20">
//         <div className="w-14 h-14 rounded-full bg-[#3f5874]/30 ring-4 ring-white/10 flex items-center justify-center">
//           <div className="w-11 h-11 rounded-full bg-slate-800/30 flex items-center justify-center">
//             <div className="w-9 h-9 rounded-full bg-[#1894A4] flex items-center justify-center">
//               <img src={iconImage} alt={title} className="w-5 h-5" />
//             </div>
//           </div>
//         </div>

//         {showArrow && (
//           <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 pointer-events-none">
//             <svg viewBox="0 0 140 6" className="w-24 h-1.5">
//               <defs>
//                 <linearGradient id="arrowLine" x1="0" x2="1">
//                   <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
//                 </linearGradient>
//               </defs>
//               <line x1="0" y1="3" x2="115" y2="3" stroke="url(#arrowLine)" strokeWidth="3" strokeLinecap="round" />
//               <polygon points="115,0 140,3 115,6" fill="rgba(255,255,255,0.25)" />
//             </svg>
//           </div>
//         )}
//       </div>

//       {/* Title & Text */}
//       <div className="absolute bottom-16 left-4 right-4 z-20">
//         <h3 className="text-lg font-extrabold text-white mb-2">{title}</h3>
//         <p className="text-xs text-white/80 leading-relaxed">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

// /* -----------------------------------
//             MAIN SECTION
// ------------------------------------ */
// export default function Trackingprocess() {
//   const cardText =
//     "Open multiply a green form lesser their from in made herb multiply";
//   const centerWords = ["RATES", "CAR", "RENTAL", "WORLDWIDE", "AFFORDABLE"];
//   const marqueeImages = ["/carfront.svg", "/carback.svg"];

//   return (
//     // <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24 w-full">
      
//     //   {/* Top Title */}
//     //   <div className="text-center mb-12 sm:mb-16 px-4">
//     //     <div className="flex items-center justify-center gap-3 mb-4">
//     //       <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
//     //       <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
//     //         Steps
//     //       </p>
//     //     </div>
//     //     <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//     //       TRACKING PROCESS
//     //     </h2>
//     //   </div>

//     //   {/* Step Cards */}
//     //   <div className="
//     //     flex flex-wrap justify-center 
//     //     gap-6 sm:gap-8 md:gap-10 
//     //     px-4 overflow-x-auto no-scrollbar 
//     //     snap-x snap-mandatory lg:snap-none lg:overflow-visible
//     //   ">
//     //     <StepCard title="Choose A Car" text={cardText} iconImage="/card1.svg" imageUrl="/carhover.jpg" />
//     //     <StepCard title="Come In Contact" text={cardText} iconImage="/card2.svg" imageUrl="/carhover.jpg" />
//     //     <StepCard title="Pick-Up Locations" text={cardText} iconImage="/card3.svg" imageUrl="/carhover.jpg" />
//     //     <StepCard title="Enjoy Driving" text={cardText} iconImage="/card4.svg" imageUrl="/carhover.jpg" showArrow={false} />
//     //   </div>

//     //   {/* Bottom Marquee */}
//     //   <div className="mt-16 sm:mt-20 overflow-hidden bg-black">
//     //     <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
          
//     //       {[...Array(1)].map((_, i) => (
//     //         <div key={i} className="flex items-center gap-6 sm:gap-10 mx-6">
              
//     //           <div className="flex items-center gap-3">
//     //             <span className="text-white font-bold text-sm sm:text-lg uppercase">Premium</span>
//     //             <img src="/carfront.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
//     //           </div>

//     //           {centerWords.map((word, idx) => (
//     //             <React.Fragment key={idx}>
//     //               <span className="text-white font-bold text-sm sm:text-lg uppercase">{word}</span>
//     //               {idx < centerWords.length - 1 && (
//     //                 <img src={marqueeImages[idx % 2]} className="w-6 h-6 sm:w-8 sm:h-8" />
//     //               )}
//     //             </React.Fragment>
//     //           ))}

//     //           <div className="flex items-center gap-3">
//     //             <img src="/carback.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
//     //             <span className="text-white font-bold text-sm sm:text-lg uppercase">Premium</span>
                
//     //           </div>

//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     //  </section>

//     <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24 w-full">
//   <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 mx-auto">
    
//     {/* Top Title */}
//     <div className="text-center mb-12 sm:mb-16">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
//         <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
//           Steps
//         </p>
//       </div>
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
//         TRACKING PROCESS
//       </h2>
//     </div>

//     {/* Step Cards */}
//     <div className="
//       flex flex-wrap justify-center 
//       gap-6 sm:gap-8 md:gap-10 
//       overflow-x-auto no-scrollbar 
//       snap-x snap-mandatory lg:snap-none lg:overflow-visible
//     ">
//       <StepCard title="Choose A Car" text={cardText} iconImage="/card1.svg" imageUrl="/carhover.jpg" />
//       <StepCard title="Come In Contact" text={cardText} iconImage="/card2.svg" imageUrl="/carhover.jpg" />
//       <StepCard title="Pick-Up Locations" text={cardText} iconImage="/card3.svg" imageUrl="/carhover.jpg" />
//       <StepCard title="Enjoy Driving" text={cardText} iconImage="/card4.svg" imageUrl="/carhover.jpg" showArrow={false} />
//     </div>

//     {/* Bottom Marquee */}
//     <div className="mt-16 sm:mt-20 overflow-hidden bg-black">
//       <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
//         {[...Array(1)].map((_, i) => (
//           <div key={i} className="flex items-center gap-6 sm:gap-10 mx-6">
//             <div className="flex items-center gap-3">
//               <span className="text-white font-bold text-sm sm:text-lg uppercase">Premium</span>
//               <img src="/carfront.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
//             </div>

//             {centerWords.map((word, idx) => (
//               <React.Fragment key={idx}>
//                 <span className="text-white font-bold text-sm sm:text-lg uppercase">{word}</span>
//                 {idx < centerWords.length - 1 && (
//                   <img src={marqueeImages[idx % 2]} className="w-6 h-6 sm:w-8 sm:h-8" />
//                 )}
//               </React.Fragment>
//             ))}

//             <div className="flex items-center gap-3">
//               <img src="/carback.svg" className="w-6 h-6 sm:w-8 sm:h-8" />
//               <span className="text-white font-bold text-sm sm:text-lg uppercase">Premium</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>

//   );
// }





import React, { useState, useEffect } from "react";

type StepCardProps = {
  title: string;
  text: string;
  iconImage: string;
  imageUrl: string;
  showArrow?: boolean;
};

const StepCard: React.FC<StepCardProps> = ({
  title,
  text,
  iconImage,
  imageUrl,
  showArrow = true,
}) => {
  return (
    <div
      className={`
        relative flex-shrink-0 
        w-full sm:w-[250px] md:w-[300px] 
        h-[268px] sm:h-[250px] 
        rounded-3xl overflow-hidden shadow-2xl 
        snap-center bg-[#1A3970]
      `}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#1A3970]/95" />

      {/* Icon + Arrow */}
      <div className="absolute top-4 left-4 flex items-center z-20">
        <div className="w-14 h-14 rounded-full bg-[#3f5874]/30 ring-4 ring-white/10 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-slate-800/30 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-[#1894A4] flex items-center justify-center">
              <img src={iconImage} alt={title} className="w-5 h-5" />
            </div>
          </div>
        </div>

        {showArrow && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 pointer-events-none">
            <svg viewBox="0 0 140 6" className="w-24 h-1.5">
              <defs>
                <linearGradient id="arrowLine" x1="0" x2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line
                x1="0"
                y1="3"
                x2="115"
                y2="3"
                stroke="url(#arrowLine)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polygon points="115,0 140,3 115,6" fill="rgba(255,255,255,0.25)" />
            </svg>
          </div>
        )}
      </div>

      {/* Title & Text */}
      <div className="absolute bottom-16 left-4 right-4 z-20">
        <h3 className="text-lg font-extrabold text-white mb-2">{title}</h3>
        <p className="text-xs text-white/80 leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default function TrackingProcess() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [slideStep, setSlideStep] = useState(1);

  const cardText = "Open multiply a green form lesser their from in made herb multiply";

  const stepCards = [
    { title: "Choose A Car", icon: "/card1.svg", image: "/carhover.jpg" },
    { title: "Come In Contact", icon: "/card2.svg", image: "/carhover.jpg" },
    { title: "Pick-Up Locations", icon: "/card3.svg", image: "/carhover.jpg" },
    { title: "Enjoy Driving", icon: "/card4.svg", image: "/carhover.jpg" },
  ];

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
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + slideStep) % stepCards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slideStep, stepCards.length]);

  const cardWidthPercent = 100 / cardsPerPage;

  return (
    <section className="bg-[#f5f7fa] py-16 sm:py-20 lg:py-24 w-full">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 mx-auto">
        {/* Top Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/splogo.png" className="w-9 h-9 sm:w-11 sm:h-11" />
            <p className="text-[#1894A4] font-bold text-xs sm:text-sm tracking-widest uppercase">
              Steps
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            TRACKING PROCESS
          </h2>
        </div>

        {/* Step Cards Slider */}
        <div className="overflow-hidden w-full mb-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidthPercent}%)` }}
          >
            {stepCards.concat(stepCards.slice(0, cardsPerPage)).map((card, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-1 sm:px-2"
                style={{ minWidth: `${100 / cardsPerPage}%` }}
              >
                <StepCard
                  title={card.title}
                  text={cardText}
                  iconImage={card.icon}
                  imageUrl={card.image}
                  showArrow={idx !== stepCards.length - 1}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(stepCards.length / slideStep) }).map((_, i) => (
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
}

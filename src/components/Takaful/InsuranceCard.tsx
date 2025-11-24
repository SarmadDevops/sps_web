import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import card5 from "../../../public/card5.png";
import Takaful from "../../../public/takaful.png";

const InsuranceCard = () => {
  const navigate = useNavigate();

  // Ye sab handlers ab navigate karengi
  const HandleTravelTakafulClick = () => navigate("/travel-takaful");
  const HandleGroupHealthClick = () => navigate("/health-takaful");
  const HandleCarTakafulClick = () => navigate("/car-takaful");
  const HandleBikeTakafulClick = () => navigate("/bike-takaful");
  const HandleFireTClick = () => navigate("/fire-takaful");

  return (
    <div className="w-full bg-[#F4F9FE] min-h-screen">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
        
        {/* Main Card */}
        <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 overflow-hidden">
          
          {/* Left Section */}
          <div className="flex-1 min-w-0 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
              <div className="min-w-0 flex-shrink">
                <p className="truncate"><span className="font-semibold">Name:</span> Osama Bin Jahangir</p>
                <p className="truncate"><span className="font-semibold">Email:</span> osamajahangir786@gmail.com</p>
              </div>
              <div className="mt-2 sm:mt-0 flex-shrink-0">
                <p><span className="font-semibold">Gender:</span> Male</p>
                <p><span className="font-semibold">Phone:</span> +923314272709</p>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-center w-full">
              <img
                src={Takaful}
                alt="Accident Insurance"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain max-w-full mx-auto"
              />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-lg font-semibold text-blue-700">Buy Personal Accident Insurance Plan</h2>
              <p className="text-blue-600 text-sm font-medium">for as low as Rs. 190/year</p>
              <p className="text-gray-600 text-xs">Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10 minutes</p>
            </div>
          </div>

          {/* Right Section - Cards Grid */}
          <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
            <h3 className="text-center font-semibold text-gray-700 mb-3 sm:mb-4">Takaful</h3>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div onClick={HandleTravelTakafulClick} className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition">
                <img src={card1} alt="Travel" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">Travel Takaful</p>
              </div>

              <div onClick={HandleGroupHealthClick} className="flex flex-col items-center justify-center bg-pink-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition">
                <img src={card2} alt="Health" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">Group Health Takaful</p>
              </div>

              <div onClick={HandleCarTakafulClick} className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition">
                <img src={card3} alt="Car" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">Motor Car Takaful</p>
              </div>

              <div onClick={HandleBikeTakafulClick} className="flex flex-col items-center justify-center bg-purple-100 rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition">
                <img src={card4} alt="Bike" className="w-8 h-8 sm:w-10 sm:h-10 mb-1 sm:mb-2" />
                <p className="text-gray-700 text-xs sm:text-sm font-medium text-center">Bike Takaful</p>
              </div>

              <div onClick={HandleFireTClick} className="col-span-2 flex items-center justify-center bg-[#FFCDCE] rounded-lg p-2 sm:p-3 md:p-4 cursor-pointer hover:shadow-md transition gap-2 sm:gap-3">
                <img src={card5} alt="Fire" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <p className="text-gray-700 text-sm sm:text-base font-semibold">Fire Takaful</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
import { useState } from "react";
import Freeqouteinsurance from "./Freeqouteinsurance";
import { Calendar, ChevronDown } from "lucide-react";

interface InsuranceQuote {
  id: number;
  company: string;
  logo: string;
  rate: string;
  insurancePlan: string;
  installmentAmount: string;
  total: string;
}

interface FormFieldConfig {
  name: string;
  label: string;
  type: "select" | "input" | "date";
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface VehicleInsuranceFormProps {
  vehicleType: "car" | "bike";
  formFields: FormFieldConfig[];
  apiEndpoint: string;
}

const VehicleInsuranceForm = ({
  vehicleType,
  formFields,
  apiEndpoint,
}: VehicleInsuranceFormProps) => {
  const [showInsuranceCards, setShowInsuranceCards] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initialData: Record<string, string> = {};
    formFields.forEach((field) => {
      initialData[field.name] = "";
    });
    return initialData;
  });

  const [insuranceQuotes, setInsuranceQuotes] = useState<InsuranceQuote[]>([]);
  const [showFreeQuote, setShowFreeQuote] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckInfo = async () => {
    try {
      console.log(`Calling ${apiEndpoint} for ${vehicleType} insurance`);
    } catch (error) {
      console.error(`Error fetching ${vehicleType} insurance quotes:`, error);
    }

    // Dummy data for now
    const dummyQuotes = [
      {
        id: 1,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 2,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 3,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
      {
        id: 4,
        company: "Jubilee Insurance",
        logo: "/Jubileeinsurance.png",
        rate: "1.25%",
        insurancePlan: "Installment Plan",
        installmentAmount: "Rs 938 / month",
        total: "RS 5,625",
      },
    ];

    setInsuranceQuotes(dummyQuotes);
    setShowInsuranceCards(true);
  };

  const renderFormField = (field: FormFieldConfig) => {
    switch (field.type) {
      case "select":
        return (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
              {field.required && "*"}
            </label>
            <div className="relative">
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4] appearance-none"
              >
                <option value="">
                  {field.placeholder || "--- Select ---"}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        );

      case "date":
        return (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
              {field.required && "*"}
            </label>
            <div className="relative">
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={field.placeholder || "DD/MM/YYYY"}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4]"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        );

      case "input":
      default:
        return (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
              {field.required && "*"}
            </label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder || "Enter Value"}
              className="w-full px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none focus:border-[#1894a4]"
            />
          </div>
        );
    }
  };

  return (
    <section className="w-full bg-white pt-2 md:pt-4 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                !showFreeQuote
                  ? "bg-[#1A3970] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </div>
            <div
              className={`w-16 h-1 ${
                showFreeQuote ? "bg-[#1A3970]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                showFreeQuote
                  ? "bg-[#1A3970] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* Form Section - Only show when not on free quote step */}
        {!showFreeQuote && (
          <div className="bg-[#F4F9FE] rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-[#1A3970] mb-6">
              Vehicle Info
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map(renderFormField)}
            </div>

            {/* Check Info Button - Only shown when cards are hidden */}
            {!showInsuranceCards && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleCheckInfo}
                  className="bg-[#1A3970] text-white px-12 py-3 rounded font-semibold hover:bg-[#2A4D8F] transition-colors"
                >
                  Check Info
                </button>
              </div>
            )}

            {/* Insurance Cards Section - Hidden by default */}
            {showInsuranceCards &&
              insuranceQuotes.length > 0 &&
              !showFreeQuote && (
                <div className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {insuranceQuotes.map((quote) => (
                      <div
                        key={quote.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                      >
                        {/* Company Logo */}
                        <div className="bg-white p-4 flex items-center justify-center border-b">
                          <img
                            src={quote.logo}
                            alt={quote.company}
                            className="h-12 object-contain"
                          />
                        </div>

                        {/* Card Content */}
                        <div className="bg-[#1894a4] text-white p-4">
                          <div className="mb-4">
                            <p className="text-sm mb-1">
                              3T-Old {vehicleType === "car" ? "Car" : "Bike"}{" "}
                              Insurance Rate
                            </p>
                            <p className="text-3xl font-bold">{quote.rate}</p>
                          </div>

                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span>{quote.insurancePlan}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span>{quote.installmentAmount}</span>
                            </div>
                          </div>

                          <div className="border-t border-white/30 pt-3 mb-4">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">Total:</span>
                              <span className="text-xl font-bold">
                                {quote.total}
                              </span>
                            </div>
                          </div>

                          <button className="w-full bg-[#1A3970] text-white py-2 rounded font-semibold hover:bg-[#2A4D8F] transition-colors mb-2">
                            INQUIRE NOW
                          </button>
                          <button className="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700 transition-colors">
                            BUY NOW
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Confirm Button */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowFreeQuote(true)}
                      className="bg-[#1A3970] text-white px-12 py-3 rounded font-semibold hover:bg-[#2A4D8F] transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}
          </div>
        )}

        {/* Free Quote / Second Step - shown after Confirm */}
        {showFreeQuote && (
          <div className="bg-[#F4F9FE] rounded-lg p-6 md:p-8">
            <Freeqouteinsurance
              initialVehicleInfo={{
                brand: formData.brand || "",
                fuelType: formData.fuelType || "",
                city: formData.city || "",
                purchaseDate: formData.purchaseDate || "",
                model: formData.model || "",
                currentValue: formData.currentValue || "",
              }}
              onBack={() => setShowFreeQuote(false)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleInsuranceForm;

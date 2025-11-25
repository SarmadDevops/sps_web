import { useState } from "react";
import { ArrowRight, AlertCircle } from "lucide-react";

import { healthTakafulFormFields } from "../../../config/formFields";

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone: string): boolean => {
  const clean = phone.replace(/\D/g, "");
  return clean.length === 10 && /^3[0-9]{9}$/.test(clean);
};

const getFieldLabel = (name: string): string => {
  const labels: Record<string, string> = {
    yourName: "Your Name",
    companyName: "Company Name",
    workEmail: "Work Email",
    city: "City",
    employeeCount: "Number of Employees",
    insured: "Insurance Status",
    phoneNumber: "Phone Number",
  };
  return labels[name] || name;
};

const HealthTakaful = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    healthTakafulFormFields.forEach(
      (field: (typeof healthTakafulFormFields)[number]) => {
        const value = formData[field.name] || "";
        if (field.required && !value.trim()) {
          newErrors[field.name] = `Enter a valid ${getFieldLabel(
            field.name
          ).toLowerCase()}`;
        }
        if (field.name === "workEmail") {
          if (!value.trim()) newErrors[field.name] = "Enter a valid email";
          else if (!validateEmail(value))
            newErrors[field.name] = "Enter a valid email";
        }
      }
    );

    const phone = formData.phoneNumber || "";
    if (!phone.trim()) newErrors.phoneNumber = "Enter a valid phone number";
    else if (!validatePhone(phone))
      newErrors.phoneNumber =
        "Enter a valid 10-digit PK mobile (e.g., 3001234567)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Health Takaful Form Data:", formData);
      alert("Health Takaful form submitted successfully!");
      setFormData({});
      setErrors({});
    }
  };

  return (
    <div className="w-full bg-[#F4F9FE] min-h-screen">
      <div className="w-full px-4 md:px-10 lg:px-10 xl:px-16 2xl:px-18 py-8">
        {/* Main Card */}
        <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 gap-4 md:gap-8 border border-gray-100 overflow-hidden">
          {/* Left Section - Same UI */}
          <div className="flex-1 min-w-0 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-700">
              <div className="min-w-0 flex-shrink">
                <p className="truncate">
                  <span className="font-semibold">Name:</span> Osama Bin
                  Jahangir
                </p>
                <p className="truncate">
                  <span className="font-semibold">Email:</span>{" "}
                  osamajahangir786@gmail.com
                </p>
              </div>
              <div className="mt-2 sm:mt-0 flex-shrink-0">
                <p>
                  <span className="font-semibold">Gender:</span> Male
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +923314272709
                </p>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-center w-full">
              <img
                src="/takaful.png"
                alt="Accident Insurance"
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain max-w-full mx-auto"
              />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-lg font-semibold text-blue-700">
                Buy Personal Accident Insurance Plan
              </h2>
              <p className="text-blue-600 text-sm font-medium">
                for as low as Rs. 190/year
              </p>
              <p className="text-gray-600 text-xs">
                Accidental Death Coverage up to Rs. 15 Lakh. Buy online in 10
                minutes
              </p>
            </div>
          </div>

          {/* Right Section - Health Form */}
          <div className="flex-1 min-w-0 bg-gray-50 rounded-lg shadow-lg p-3 sm:p-4 border border-gray-200">
            <div className="bg-white rounded-lg p-3">
              <h3 className="text-center font-semibold text-gray-700 mb-3 text-sm">
                Get customized quote for your organization
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                {healthTakafulFormFields.map(
                  (field: (typeof healthTakafulFormFields)[number]) => {
                    if (field.name === "employeeCount") return null;

                    return (
                      <div key={field.name} className="space-y-1">
                        {field.name === "city" ? (
                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <select
                                name="city"
                                value={formData.city || ""}
                                onChange={handleInputChange}
                                className={`w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm transition-all ${
                                  errors.city
                                    ? "border-red-500 ring-2 ring-red-200"
                                    : "border-gray-300"
                                }`}
                                required
                              >
                                <option value="">City</option>
                                {field.options?.map(
                                  (opt: { value: string; label: string }) => (
                                    <option key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </option>
                                  )
                                )}
                              </select>
                              {errors.city && (
                                <div className="flex items-center gap-1 text-red-600 text-xs">
                                  <AlertCircle className="w-3 h-3" />
                                  <span>{errors.city}</span>
                                </div>
                              )}
                            </div>

                            <div className="space-y-1">
                              <select
                                name="employeeCount"
                                value={formData.employeeCount || ""}
                                onChange={handleInputChange}
                                className={`w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm transition-all ${
                                  errors.employeeCount
                                    ? "border-red-500 ring-2 ring-red-200"
                                    : "border-gray-300"
                                }`}
                                required
                              >
                                <option value="">Number of employees</option>
                                {healthTakafulFormFields
                                  .find(
                                    (
                                      f: (typeof healthTakafulFormFields)[number]
                                    ) => f.name === "employeeCount"
                                  )
                                  ?.options?.map(
                                    (opt: { value: string; label: string }) => (
                                      <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </option>
                                    )
                                  )}
                              </select>
                              {errors.employeeCount && (
                                <div className="flex items-center gap-1 text-red-600 text-xs">
                                  <AlertCircle className="w-3 h-3" />
                                  <span>{errors.employeeCount}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : field.type === "select" ? (
                          <div className="space-y-1">
                            <select
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                              className={`w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm transition-all ${
                                errors[field.name]
                                  ? "border-red-500 ring-2 ring-red-200"
                                  : "border-gray-300"
                              }`}
                              required={field.required}
                            >
                              <option value="">{field.placeholder}</option>
                              {field.options?.map(
                                (opt: { value: string; label: string }) => (
                                  <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                  </option>
                                )
                              )}
                            </select>
                            {errors[field.name] && (
                              <div className="flex items-center gap-1 text-red-600 text-xs">
                                <AlertCircle className="w-3 h-3" />
                                <span>{errors[field.name]}</span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <input
                              type={
                                field.name === "workEmail" ? "email" : "text"
                              }
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                              placeholder={field.placeholder}
                              className={`w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm transition-all ${
                                errors[field.name]
                                  ? "border-red-500 ring-2 ring-red-200"
                                  : "border-gray-300"
                              }`}
                              required={field.required}
                            />
                            {errors[field.name] && (
                              <div className="flex items-center gap-1 text-red-600 text-xs">
                                <AlertCircle className="w-3 h-3" />
                                <span>{errors[field.name]}</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }
                )}

                <div className="grid grid-cols-2 gap-2">
                  <select className="w-full px-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm">
                    <option value="+92">+92</option>
                  </select>
                  <div className="space-y-1">
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber || ""}
                      onChange={handleInputChange}
                      placeholder="3001234567"
                      className={`w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1894a4] text-sm transition-all ${
                        errors.phoneNumber
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <div className="flex items-center gap-1 text-red-600 text-xs">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phoneNumber}</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm mt-4 bg-[#FF8C00] hover:bg-[#FF7700] text-white shadow-md"
                >
                  Submit <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTakaful;

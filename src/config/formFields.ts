// Car form field configuration
export const carFormFields = [
  {
    name: "brand",
    label: "What is your vehicle Brand?",
    type: "input" as const,
    placeholder: "Enter Brand",
    required: true,
  },
  {
    name: "fuelType",
    label: "What is your car fuel type?",
    type: "select" as const,
    placeholder: "Select Fuel Type",
    required: true,
    options: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
      { value: "hybrid", label: "Hybrid" },
      { value: "electric", label: "Electric" },
    ],
  },
  {
    name: "city",
    label: "What is your city?",
    type: "select" as const,
    placeholder: "--- Your City ---",
    required: true,
    options: [
      { value: "karachi", label: "Karachi" },
      { value: "lahore", label: "Lahore" },
      { value: "islamabad", label: "Islamabad" },
      { value: "rawalpindi", label: "Rawalpindi" },
    ],
  },
  {
    name: "purchaseDate",
    label: "What is your car Purchase date & year?",
    type: "date" as const,
    placeholder: "DD/MM/YYYY",
    required: true,
  },
  {
    name: "model",
    label: "What is your car model?",
    type: "select" as const,
    placeholder: "Your VIN Number",
    required: true,
    options: [
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
    ],
  },
  {
    name: "currentValue",
    label: "What is your car Current Value?",
    type: "input" as const,
    placeholder: "Enter Value",
    required: true,
  },
];

// Bike form field configuration
export const bikeFormFields = [
  {
    name: "brand",
    label: "What is your vehicle Brand?",
    type: "input" as const,
    placeholder: "Enter Brand",
    required: true,
  },
  {
    name: "fuelType",
    label: "What is your bike fuel type?",
    type: "select" as const,
    placeholder: "Select Fuel Type",
    required: true,
    options: [
      { value: "petrol", label: "Petrol" },
      { value: "diesel", label: "Diesel" },
    ],
  },
  {
    name: "bikeCC",
    label: "What is your Bike CC?",
    type: "select" as const,
    placeholder: "--- Select ---",
    required: true,
    options: [
      { value: "70cc", label: "70 CC" },
      { value: "100cc", label: "100 CC" },
      { value: "125cc", label: "125 CC" },
      { value: "150cc", label: "150 CC" },
      { value: "200cc", label: "200 CC" },
    ],
  },
  {
    name: "purchaseDate",
    label: "What is your bike Purchase date & year?",
    type: "date" as const,
    placeholder: "DD/MM/YYYY",
    required: true,
  },
  {
    name: "model",
    label: "What is your bike model?",
    type: "select" as const,
    placeholder: "Your VIN Number",
    required: true,
    options: [
      { value: "2020", label: "2020" },
      { value: "2021", label: "2021" },
      { value: "2022", label: "2022" },
      { value: "2023", label: "2023" },
      { value: "2024", label: "2024" },
    ],
  },
  {
    name: "currentValue",
    label: "What is your bike Current Value?",
    type: "input" as const,
    placeholder: "Enter Value",
    required: true,
  },
];

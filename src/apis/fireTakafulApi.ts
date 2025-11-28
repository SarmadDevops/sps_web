import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const submitFireTakafulForm = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/firetakaful`, data);
    return response.data;
  } catch (error: any) {
    console.error("Fire takaful form API error:", error);
    throw new Error(error.response?.data?.message || "Failed to submit fire form");
  }
};

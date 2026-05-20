import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const contactService = {
  sendMessage: async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    const response = await api.post("/messages/", data);
    return response.data;
  },
};

export const serviceService = {
  getServices: async () => {
    const response = await api.get("/services/");
    return response.data;
  },
};

export const portfolioService = {
  getPortfolioItems: async () => {
    const response = await api.get("/portfolio/");
    return response.data;
  },
};

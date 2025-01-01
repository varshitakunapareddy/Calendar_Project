import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const getCompanies = async () => {
  return axios.get(`${API_BASE_URL}/users`); // Mocked API endpoint
};

export const createCompany = async (data) => {
  return axios.post(`${API_BASE_URL}/users`, data);
};

export const deleteCompany = async (id) => {
  return axios.delete(`${API_BASE_URL}/users/${id}`);
};

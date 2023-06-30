import axios from 'axios';

const baseUrl = 'http://localhost:3001/clients';

export const getClients = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getClientById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const createClient = (client) => {
  return axios.post(baseUrl, client);
};

export const deleteClient = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

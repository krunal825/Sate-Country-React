import axios from 'axios';

const baseURL = 'http://localhost:5000/api/countries';

export const getCountries = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};

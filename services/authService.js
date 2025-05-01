import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // adjust if your backend is hosted somewhere else

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong during login');
  }
};

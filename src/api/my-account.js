import { useState } from 'react';
import axios from 'axios';

const useApi = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiCall = async (url, req) => {
    setLoading(true);
    const { data, type } = req.body;

    try {
      const response = await axios.post(url, data);
      const token = response.data.jwtToken;
      setLoading(false);
      localStorage.setItem(`${type}-token`, token);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }

  };

  return { apiCall };
};

export default useApi;
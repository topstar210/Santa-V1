import axiosInstance from 'api/axiosInstance';
import { toast } from 'react-toastify';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    const {
      response: { data },
    } = error;
    if (endpoint !== '/refresh')
      toast.error(data.message, {
        position: 'top-right',
      });
    throw error;
  }
};

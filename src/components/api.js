import axios from 'axios';

const API_KEY = '38376053-36f58a073519ff95a963b2d32';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: PER_PAGE,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

import { API_URL, STRAPI_API_TOKEN } from "./urls"; 

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`
    }
  };

  const response = await fetch(`${API_URL}${endpoint}`, options);
  const data = await response.json();

  return data;
}
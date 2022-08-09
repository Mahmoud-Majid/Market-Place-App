import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';
const API_KEY = process.env.REACT_APP_API_KEY;
export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY,
    },
  });
  return data;
}
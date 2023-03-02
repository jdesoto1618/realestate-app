import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.API_KEY,
    },
  });

  return data;
};

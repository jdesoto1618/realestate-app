import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com";

export const fetchData = async (url) => {
  const { data } = await axios.get(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "b5b1a63efemshca2dea33b831592p102dcbjsn17f9064f3f32",
    },
  });

  return data;
};

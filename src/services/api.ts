import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
export const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2/cards/",
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

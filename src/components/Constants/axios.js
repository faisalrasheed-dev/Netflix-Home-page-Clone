import axios from "axios";
import { API_KEY, baseUrl } from "./constants";

const instance = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default instance;

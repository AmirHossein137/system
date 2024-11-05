import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://45.149.79.242:8046",
});

export default ApiClient;

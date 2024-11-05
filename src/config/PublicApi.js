import axios from "axios";

const PublicApi = axios.create({
  baseURL: "http://45.149.79.242:8046",
  headers: {
    Referer: "http://localhost:3000/",
    Origin: "http://localhost:3000",
    "Content-Type": "application/json"
  },
});

export default PublicApi;

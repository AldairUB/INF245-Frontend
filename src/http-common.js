import axios from "axios";
export default axios.create({
  baseURL: "https://ingsoft.csat.ovh/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

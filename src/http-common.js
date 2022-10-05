import axios from "axios";
export default axios.create({
baseURL: "http://44.196.157.1/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

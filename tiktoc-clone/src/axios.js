import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktoc-clone.herokuapp.com/",
});

export default instance;

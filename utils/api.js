import axios from "axios";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
};
const devUrl = "http://127.0.0.1:5000";
const prodUrl = "https://chat-bot-backend-haroon6268s-projects.vercel.app/";
export const postData = (data) => {
  return axios
    .post(prodUrl, data, config)
    .then((res) => res)
    .catch((err) => err);
};

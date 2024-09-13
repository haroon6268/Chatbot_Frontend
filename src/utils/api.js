import axios from "axios";
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
};
export const postData = (data) => {
  return axios
    .post(
      "https://chat-bot-backend-haroon6268s-projects.vercel.app/",
      data,
      config
    )
    .then((res) => res)
    .catch((err) => err);
};

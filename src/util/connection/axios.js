import axios from "axios";

export const instance = axios.create({
  baseURL: "https://hidden-beyond-89915.herokuapp.com/",
  timeout: 120000, //value in ms so it will wait for 120 seconds
});

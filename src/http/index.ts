import axios from "axios";

export const API_URL = "http://54.221.154.41";

export const $api = axios.create({
  baseURL: API_URL + "/",
});

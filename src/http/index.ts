import axios from "axios";

export const API_URL = "https://api.song-kol.com";

export const $api = axios.create({
  baseURL: API_URL + "/",
});

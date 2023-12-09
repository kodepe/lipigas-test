import axios from "axios";
import { WEATHER_URI } from "../utils/constants";
export const UseAxios = () => {
  const getWeather = (ciudad: string, pais: string) => {
    console.log("GET: === ", WEATHER_URI(ciudad, pais));
    return axios.get(WEATHER_URI(ciudad, pais));
  };
  return { getWeather };
};

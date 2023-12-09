const WEATHER_API = `dc11a304f1d3adf653cc58bbba0b2511`;

export const WEATHER_URI = (ciudad: string, pais: string) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${WEATHER_API}`;

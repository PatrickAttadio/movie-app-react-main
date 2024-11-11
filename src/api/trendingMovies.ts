import { RensponseTrendingMoviesType } from "../types/responseTypes.ts";
/*
*1) Modificare MovieType con i dati che si vogliono ottenere da IMDB API
*2) Implementare la fetch IMDB API per ottenere i dati dei film
*/
const api_key = import.meta.env.VITE_API_KEY;

export const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-Us&api_key=${api_key}`;


export const getMovies = async () => {

  try {
    const response = await fetch(url);
    const data: RensponseTrendingMoviesType = await response.json();
    console.log(JSON.stringify(data.results));
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }

} 
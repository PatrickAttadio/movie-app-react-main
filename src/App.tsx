import './App.css'
import { MovieCard } from './components/MovieCard'
import { PeopleCard } from './components/PeopleCard'
import { TvCard } from './components/TvCard'
import { getMovies } from './api/trendingMovies'
import { getPeople } from './api/trendingPeople'
import { getTvs } from './api/trendingTv'
import { MovieType } from './types/movieTypes'
import { PersonType } from './types/personTypes'
import { TvType } from './types/tvTypes'
import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState<MovieType[]>([])
  const [people, setPeople] = useState<PersonType[]>([])
  const [tvs, setTvs] = useState<TvType[]>([])

  //useEffect(parFunzione, parArrayDipendenze)
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies()
      setMovies(movies)
    }
    const fetchPeople = async () => {
      const people = await getPeople()
      setPeople(people)
    }
    const fetchTvs = async () => {
      const tvs = await getTvs()
      setTvs(tvs)
    }
    fetchMovies()
    fetchPeople()
    fetchTvs()
  }, [])

  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      
      {people.map((person) => (
        <PeopleCard key={person.id} person={person} />
      ))}
      
      {tvs.map((tv) => (
        <TvCard key={tv.id} tv={tv} />
      ))}
    </>
  );  
}

export default App

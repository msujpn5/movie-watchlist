import './App.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MovieScreen from './components/MovieScreen';
import axios from "axios";
import Watchlist from './components/Watchlist';


function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })

}

  useEffect(() => {
    getData()
  }, [page])

  function addMovie(movie) {
    setWatchList([...watchList, movie])
  }

  function removeMovie(movie) {
    const newState = watchList.filter((movie1) => {
      return(
        movie1 !== movie
      )
    })
    setWatchList(newState)
  }

  return (
    <div className="App">
      <Header />
      <MovieScreen
        watchList={watchList}
        page={page}
        setPage={setPage}
        movieList={movieList}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
      <Watchlist watchList={watchList} removeMovie={removeMovie}/>
    </div>
  );
}

export default App;

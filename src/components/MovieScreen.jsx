import React from 'react';
import MovieCard from './MovieCard';

function MovieScreen({movieList, page, setPage, watchList, addMovie, removeMovie}) {
    const movieDisplay = movieList.map((movie, index) => {
        return <h2>
            <MovieCard movie={movie} watchList={watchList} addMovie={addMovie} removeMovie={removeMovie}/>
        </h2>
    })

    function decrement() {
        setPage(page - 1)
    }

    function increment() {
        setPage(page + 1)
    }

  return (
    <div className="page">
        <h1>
            Rex's Movie Theater
        </h1>
        <h3>
            Add movie to your watchlist
        </h3>
        <div className="btn-container">
            <button onClick={page !== 1 && decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
  )
}

export default MovieScreen
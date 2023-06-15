import React from 'react'

function MovieCard({movie, addMovie, watchList, removeMovie}) {
    const inWatchList = watchList.filter((movie1) => {
        return (
            movie1.id === movie.id
        )
    })


    const button = inWatchList.length === 0 ? (
        <button onClick={() => addMovie(movie)}>Add to list</button>
    ) : (
        <button onClick={() => removeMovie(movie)}>Remove</button>
    )

  return (
        <div className="movie-card">
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                <h3>
                    {movie.original_title}
                </h3>
            </div>
            {button}
        </div>
  )
}

export default MovieCard
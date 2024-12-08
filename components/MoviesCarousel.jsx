import React from "react";
import MovieCard from "./MovieCard";

function MoviesCarousel({ title, movies, isVertical }) {
  return (
    <div>
      <div className="z-50">
        <h2>{title}</h2>
        {movies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />; // Add 'return' here
        })}
      </div>
    </div>
  );
}

export default MoviesCarousel;

import React from "react";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

async function GenrePage({ params, searchParams }) {
  const { id } = await params;
  const { genre } = await searchParams;
  const movies = await getDiscoverMovies(id);

  console.log(id, genre);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
        <MoviesCarousel title={"Genre"} movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;

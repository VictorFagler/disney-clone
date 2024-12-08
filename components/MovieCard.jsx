import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <p>
        {movie.title}
        <Image
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </p>
    </div>
  );
}

export default MovieCard;

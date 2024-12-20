"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function GenreDropdown() {
  const [genres, setGenres] = useState([]); // Initialize genres state

  useEffect(() => {
    // Fetch genres when the component mounts
    async function fetchGenres() {
      const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"; 
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTJkOWM5NzIzMzJkMmYwNDBiZDVhZTEyODIyZjg1MiIsIm5iZiI6MTczMjg4NjA2My43MDEsInN1YiI6IjY3NDliZTJmNmVmZjYyNDJiZTNlYTczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qywnlwAOmTFyuXxHeo5gsCiu1nbwWCFampEfS8XXeWc`,
        },
        next: {
          revalidate: 60 * 60 * 24,
        },
      };

      try {
        const response = await fetch(url, options); 
        const data = await response.json(); 
        setGenres(data.genres || []); 
      } catch (error) {
        console.error("Error fetching genres:", error); 
      }
    }

    fetchGenres(); 
  }, []); 

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center outline-none">
          Genre <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {genres.length > 0 ? (
            genres.map((genre) => (
              <DropdownMenuItem key={genre.id}>
                <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                  {genre.name}
                </Link>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem>No genres available</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GenreDropdown;
